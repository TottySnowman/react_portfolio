import { useState, useEffect, useRef } from "react";
import "./chatbot.css";

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", role: "system" },
  ]);
  const [input, setInput] = useState("");
  const chatBodyRef = useRef(null);
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, role: "user" }]);
      setInput("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm here to help!", role: "system" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <button
        className="chat-button"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? "Close Chat" : "Start Chat"}
      </button>

      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chat</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="close-button"
            >
              ✖
            </button>
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.role}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type a message..."
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button className="send-button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatButton;
