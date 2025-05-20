// pages/api/dialogflow.js
import { SessionsClient } from '@google-cloud/dialogflow';

const LANGUAGE_CODE = 'es';

const clientConfig = {
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      project_id: process.env.NEXT_PUBLIC_PROJECT_ID
    }
  };

const sessionClient = new SessionsClient(clientConfig);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Método no permitido');
  }

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
    return res.status(500).json({ error: 'Error al comunicarse con Dialogflow' });
  }
}