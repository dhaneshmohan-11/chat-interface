import React, { useState, useEffect } from 'react';

const mockResponses = [
  "Hi 😊. Iam Chat Interface. How can i help You?",
  "Hello! How can I assist you today?",
  "You Can assist me at any time",
  "I'm here to help with any questions you might have.",
  "Feel free to ask me anything.",
];
const Chat = ({ darkMode }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim() !== '') {
      const newMessages = [...messages, { sender: 'user', text: input }];
      setMessages(newMessages);
      setInput('');
      setIsTyping(true);

      setTimeout(() => {
        const response = mockResponses[Math.floor(Math.random() * mockResponses.length)];
        setMessages([...newMessages, { text: response, sender: 'system' }]);
        setIsTyping(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (

    <div className="flex flex-col h-full">
      <h1 className='text-center text-2xl'>ᴄʜᴀᴛ ɪɴᴛᴇʀꜰᴀᴄᴇ</h1>
      <div id="chat-window" className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block rounded-lg p-2 ${message.sender === 'user' ? 'bg-blue-500 text-white' : `${darkMode ? 'bg-gray-700' : 'bg-gray-200'} text-gray-800`}`}>
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="text-left mb-2">
            <div className={`inline-block rounded-lg p-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} text-gray-800`}>
              System is typing...
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center border-t p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className={`flex-1 p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>

  );
};

export default Chat;
