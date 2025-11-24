import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, ChevronDown } from 'lucide-react';
import { streamDentalResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const DentalAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Welcome to Lumina Dental. I am your virtual concierge. How may I assist you with our services today?",
      timestamp: Date.now()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const apiHistory = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const stream = await streamDentalResponse(userMessage.text, apiHistory);
      
      let fullResponseText = '';
      const botMessageId = Date.now();
      
      setMessages(prev => [...prev, {
        role: 'model',
        text: '',
        timestamp: botMessageId
      }]);

      for await (const chunk of stream) {
        const text = chunk.text;
        if (text) {
          fullResponseText += text;
          setMessages(prev => prev.map(msg => 
            msg.timestamp === botMessageId 
              ? { ...msg, text: fullResponseText }
              : msg
          ));
        }
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: "I apologize, but I am unable to access the schedule at this moment. Please contact our front desk directly.",
        timestamp: Date.now()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 border border-white/10 ${
          isOpen ? 'bg-accent text-primary rotate-90' : 'bg-primary text-white hover:bg-primaryLight'
        }`}
        aria-label="Open Dental Assistant"
      >
        {isOpen ? <ChevronDown size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-28 right-8 w-full max-w-[380px] bg-white rounded-lg shadow-2xl z-40 transition-all duration-300 transform origin-bottom-right border border-slate-200 overflow-hidden ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-white p-5 flex items-center gap-4">
          <div className="p-2 bg-white/10 rounded-full border border-white/20">
            <Sparkles size={18} className="text-accent" />
          </div>
          <div>
            <h3 className="font-serif font-medium text-lg tracking-wide">Lumina Concierge</h3>
            <p className="text-[10px] uppercase tracking-widest text-slate-300">AI Assistant</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-96 overflow-y-auto p-6 space-y-6 bg-slate-50 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-lg text-sm leading-relaxed font-light shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-white text-slate-700 border border-slate-100'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                <Loader2 size={14} className="animate-spin text-accent" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Processing</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-100 bg-white">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your inquiry..."
              className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-primary text-sm transition-all font-light"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="absolute right-2 p-2 text-primary hover:text-accent disabled:opacity-30 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};