import React from "react";

const ChatDisplay = ({ messages }) => {
  return (
    <div
      className="chat-display bg-light p-3 border"
      style={{
        position: "fixed",
        top: "60px",
        left: 0,
        width: "100%",
        maxHeight: "80vh",
        overflowY: "auto",
        textAlign: "left",
      }}
    >
      {messages.length === 0 ? (
        <p className="text-muted">No messages yet. Start the conversation!</p>
      ) : (
        messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <strong>{msg.user}: </strong>
            <span>{msg.text}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default ChatDisplay;
