import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);

    // Dummy reply for now
    const botReply = { sender: 'bot', text: "I'll find colleges for you soon!" };
    setMessages(prev => [...prev, newMessage, botReply]);
    setInput('');
  };

  return (
    <div>
      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid gray', padding: '1rem' }}>
        {messages.map((msg, i) => (
          <div key={i}><strong>{msg.sender}:</strong> {msg.text}</div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && sendMessage()}
        placeholder="Type your question..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBot;