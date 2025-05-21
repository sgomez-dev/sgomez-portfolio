// pages/api/dialogflow.js
import { SessionsClient } from '@google-cloud/dialogflow';
const LANGUAGE_CODE = 'es';

// Middleware para manejar CORS
const cors = (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return true;
  }
  return false;
};

const clientConfig = {
  credentials: {
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    project_id: process.env.NEXT_PUBLIC_PROJECT_ID
  }
};

const sessionClient = new SessionsClient(clientConfig);

export default async function handler(req, res) {
  // Maneja CORS primero
  if (cors(req, res)) return;
  
  if (req.method === 'POST') {
    const { message, sessionId } = req.body;
    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
    
    if (!projectId || !sessionId) {
      console.error('Faltan PROJECT_ID o sessionId:', { projectId, sessionId });
      return res.status(400).json({ error: 'Faltan PROJECT_ID o sessionId' });
    }
    
    try {
      const sessionPath = `projects/${projectId}/agent/sessions/${sessionId}`;
      const request = {
        session: sessionPath,
        queryInput: {
          text: {
            text: message,
            languageCode: LANGUAGE_CODE,
          },
        },
      };
      
      const [response] = await sessionClient.detectIntent(request);
      const result = response.queryResult;
      
      return res.status(200).json({
        reply: result.fulfillmentText,
        intent: result.intent?.displayName || null,
        parameters: result.parameters?.fields || {},
      });
    } catch (error) {
      console.error('Error al comunicarse con Dialogflow:', error);
      return res.status(500).json({ error: 'Error al comunicarse con Dialogflow', details: error.message });
    }
  }
  
  // Para cualquier otro método (GET, PUT, etc.)
  res.status(200).json({ message: 'Dialogflow API endpoint. Use POST.' });
}