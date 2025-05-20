"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

// Utilidad para normalizar texto (quitar tildes, pasar a minúsculas, quitar signos)
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quitar tildes
    .replace(/[^a-z0-9áéíóúüñ\s]/gi, "") // quitar signos
    .trim();
}

// Preguntas y respuestas configurables
const qaPairs = [
  {
    keywords: [
      "quien es santiago",
      "quién es santiago",
      "quien eres",
      "quién eres",
      "sobre ti",
    ],
    answer:
      "Santiago Gómez de la Torre Romero es un ingeniero informático apasionado por el desarrollo web y la tecnología. Actualmente trabaja en Santander y busca contribuir proactivamente en proyectos digitales innovadores. ¡Puedes preguntarme sobre su experiencia, habilidades o proyectos!"
  },
];

const botResponses = {
  greeting: "¡Hola! Soy Corvex, un chatbot que representa a Santiago. ¿En qué puedo ayudarte hoy?",
  default: "Lo siento, no tengo una respuesta específica para eso. ¿Podrías reformular tu pregunta?",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Lógica de best match
  function getBotAnswer(userInput) {
    const normalizedInput = normalize(userInput);
    for (const qa of qaPairs) {
      for (const keyword of qa.keywords) {
        if (normalizedInput.includes(normalize(keyword))) {
          return qa.answer;
        }
      }
    }
    return botResponses.default;
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages(prev => [...prev, userMessage]);

    // Simular respuesta del bot
    setTimeout(() => {
      const botMessage = {
        text: getBotAnswer(inputMessage),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 700);

    setInputMessage('');
  };

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      <motion.button
        className="fixed bottom-24 right-8 z-50 flex items-center gap-2 rounded-full border border-stone-50/30 bg-stone-200 text-stone-900 p-4 shadow-lg hover:bg-stone-300 hover:shadow-xl transition-all"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </motion.button>

      {/* Ventana del chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-36 right-8 w-96 max-w-[95vw] h-[500px] bg-white/60 backdrop-blur-lg rounded-2xl border border-stone-50/30 shadow-2xl flex flex-col z-100"
          >
            {/* Header */}
            <div className="bg-[#4b14ff] text-white p-4 rounded-t-2xl flex justify-between items-center border-b border-stone-50/30">
              <div className="flex items-center gap-2">
                <FaRobot size={24} />
                <h3 className="font-semibold">Chat con Corvex</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-200 transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-700 mt-4">
                  {botResponses.greeting}
                </div>
              ) : (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-xl p-3 border ${
                        message.sender === 'user'
                          ? 'bg-[#4b14ff] text-white border-[#4b14ff]'
                          : 'bg-[#7b00ff]/80 text-white border-[#7b00ff] backdrop-blur-md'
                      } shadow-sm`}
                    >
                      <p>{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-stone-50/30 bg-white/60 rounded-b-2xl">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 p-2 border border-stone-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white/80 text-black"
                />
                <button
                  type="submit"
                  className="bg-[#4b14ff] text-white p-2 rounded-lg hover:bg-[#7b00ff] transition-colors shadow-md border border-[#4b14ff]"
                >
                  <FaPaperPlane size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
