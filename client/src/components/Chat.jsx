import React, { useState } from "react";

const Chat = ({ user }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage(""); // Clear input field
    } else {
      console.log("Cannot send an empty message.");
    }
  };

  return (
    <div
      className="bg-light"
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        paddingTop: "60px",
      }}
    >
      {/* Chat Header */}
      <div
        className="py-2 px-3 border-bottom bg-white"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div className="d-flex align-items-center">
          <img
            src="https://robohash.org/mail@ashallendesign.co.uk"
            className="rounded-circle mx-2"
            alt={user}
            width="40"
            height="40"
          />
          <div>
            <strong>Logged in as {user}</strong>
          </div>
        </div>
      </div>

      {/* Chat Input Box */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#fff",
          borderTop: "1px solid #ddd",
          padding: "10px 20px",
          zIndex: 1000,
        }}
      >
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-3"
            style={{
              borderRadius: "20px",
              padding: "10px 15px",
              flex: 1,
            }}
            value={message}
            placeholder="Type your message here..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="btn btn-info"
            style={{
              borderRadius: "20px",
              padding: "10px 20px",
            }}
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
