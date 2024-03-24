import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");
  const socket = io("http://localhost:3000/v1/send/"); // Assuming your server is running on port 3000

  useEffect(() => {
    // Listen for incoming messages
    socket.on("chat message", (msg: string) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Clean up
    return () => {
      socket.disconnect();
    };
  }, []); // Run only once on component mount

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("chat message", message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        className="border p-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="bg-primary text-white p-2" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default ChatApp;
