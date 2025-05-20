"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Chatbot = () => {
  const sessionIdRef = useRef(null);
  
  // Array de preguntas sugeridas
  const suggestedQuestions = [
    "¿Quién es Santiago?",
    "¿Cómo lo contacto?",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      let savedSessionId = sessionStorage.getItem('chatbotSessionId');

      if (!savedSessionId) {
        // Nueva sesión: genera ID
        savedSessionId = uuidv4();
        sessionStorage.setItem('chatbotSessionId', savedSessionId);
      }

      sessionIdRef.current = savedSessionId;
    }
  }, []);

  // Inicializa los mensajes como un array vacío, sin cargar nada del storage
  const [messages, setMessages] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e, questionText = null) => {
    if (e) e.preventDefault();
    
    const messageToSend = questionText || inputMessage;
    if (!messageToSend.trim()) return;

    const userMessage = {
      id: uuidv4(),
      text: messageToSend,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    setInputMessage('');

    try {
      const response = await fetch("/api/dialogflow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend, sessionId: sessionIdRef.current }),
      });

      const data = await response.json();
      const botText = data.reply || "Lo siento, no entendí tu mensaje.";

      const botMessage = {
        id: uuidv4(),
        text: botText,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString(),
      };

      setTimeout(() => {
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 600);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: uuidv4(),
          text: "Hubo un error al comunicarme con el servidor. Intenta más tarde.",
          sender: 'bot',
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-24 right-8 z-50 flex items-center gap-2 rounded-full border border-stone-50/30 bg-stone-200 text-stone-900 p-4 shadow-lg hover:bg-stone-300 hover:shadow-xl transition-all md:bottom-24 md:right-8 bottom-4 right-4"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed md:bottom-36 md:right-8 bottom-20 right-2 w-full max-w-xs md:max-w-[95vw] md:w-96 h-[70vh] md:h-[500px] bg-white/60 backdrop-blur-lg rounded-2xl border border-stone-50/30 shadow-2xl flex flex-col z-100"
          >
            <div className="bg-[#4b14ff] text-white p-3 md:p-4 rounded-t-2xl flex justify-between items-center border-b border-stone-50/30 text-base md:text-lg">
              <div className="flex items-center gap-2">
                <FaRobot size={20} className="md:size-6" />
                <h3 className="font-semibold">Chat con Corvex</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-200 transition-colors"
              >
                <FaTimes size={18} className="md:size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-3 md:space-y-4 text-sm md:text-base">
              {messages.length === 0 ? (
                <div className="text-center text-gray-700 mt-4">
                  ¡Hola! Soy Corvex, un chatbot que representa a Santiago. Puedes preguntarme sobre Santiago, su experiencia, sus proyectos y cualquier cosa sobre su vida laboral.
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl p-2 md:p-3 border ${
                          message.sender === 'user'
                            ? 'bg-[#4b14ff] text-white border-[#4b14ff]'
                            : 'bg-[#7b00ff]/80 text-white border-[#7b00ff] backdrop-blur-md'
                        } shadow-sm text-xs md:text-base`}
                      >
                        <p>{message.text}</p>
                        <span className="text-[10px] md:text-xs opacity-70 mt-1 block">
                          {message.timestamp}
                        </span>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-xl p-2 md:p-3 border bg-[#7b00ff]/60 text-white border-[#7b00ff] backdrop-blur-md shadow-sm text-xs md:text-base italic">
                        Corvex está escribiendo...
                      </div>
                    </div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-2 md:p-4 border-t border-stone-50/30 bg-white/60 rounded-b-2xl">
              {/* Preguntas sugeridas */}
              <div className="mb-2 flex flex-wrap gap-2 overflow-x-auto pb-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSendMessage(null, question)}
                    className="bg-[#4b14ff] text-white text-xs md:text-sm px-3 py-1 rounded-full border border-[#4b14ff] hover:bg-[#7b00ff] transition-colors whitespace-nowrap"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 p-2 border border-stone-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white/80 text-black text-xs md:text-base"
                />
                <button
                  type="submit"
                  className="bg-[#4b14ff] text-white p-2 rounded-lg hover:bg-[#7b00ff] transition-colors shadow-md border border-[#4b14ff]"
                >
                  <FaPaperPlane size={16} className="md:size-5" />
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