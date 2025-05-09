'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

export const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#b49656] rounded-full shadow-lg flex items-center justify-center hover:bg-[#866a43] transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-[#b49656] p-4 text-white">
              <h3 className="font-semibold">Chat with us</h3>
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {/* System Message */}
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#b49656] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">S</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    Hello! How can I help you today?
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex items-start space-x-2 justify-end">
                <div className="bg-[#b49656] rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-white">
                    I have a question about inheritance rights.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 text-sm">U</span>
                </div>
              </div>

              {/* System Message */}
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#b49656] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm">S</span>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    I'd be happy to help! What would you like to know about inheritance rights?
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#b49656]"
                />
                <button className="px-4 py-2 bg-[#b49656] text-white rounded-lg hover:bg-[#866a43] transition-colors">
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 