import { useState, useEffect, useRef } from "react";
import "./chatbot.css";
import ClipLoader from "react-spinners/ClipLoader";

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [socket, setSocket] = useState(null);
  const [modelState, setModelState] = useState(null);
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

  const handleChatOpenClick = async () => {
    if (socket == null) {
      const ws = new WebSocket("ws:localhost:6001/chat/ws");

      ws.onopen = () => {
        ws.send("get model state");
      };

      ws.onmessage = (event) => {
        setModelState(event.data);
      };

      ws.onclose = () => {
        setSocket(null);
      };

      setSocket(ws);
    }

    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="chat-container">
      <button
        className="chat-button"
        onClick={async () => await handleChatOpenClick()}
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

          {modelState === "STARTING" && <ClipLoader />}
          {modelState === "RUNNING" && (
            <>
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
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatButton;
