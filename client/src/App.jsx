import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

import { useState } from "react";
import "./App.css";
import MessageInputBox from "./components/MessageInputBox";
import Login from "./components/Login";

function App() {
  const [newUser, setNewUser] = useState(""); // For the input field
  const [user, setUser] = useState(""); // For logged-in user
  const [messages, setMessages] = useState([]); // For storing messages
  const [currentMessage, setCurrentMessage] = useState(""); // For the input field in MessageInputBox

  // Handle username input change
  function handleChange({ currentTarget: input }) {
    setNewUser(input.value);
  }

  // Log in a new user
  function logNewUser() {
    if (newUser.trim()) {
      setUser(newUser);
      setNewUser(""); // Clear the input field after setting the user
    }
  }

  // Handle message input change
  function handleMessageChange(e) {
    setCurrentMessage(e.target.value);
  }

  // Send a message
  function handleSendMessage() {
    if (currentMessage.trim()) {
      setMessages([...messages, { user, text: currentMessage }]);
      setCurrentMessage(""); // Clear the input field after sending the message
    }
  }

  return (
    <main className="content">
      {/* "Logged in as" message fixed at the top-left */}
      {user && (
        <div
          className="bg-light py-2 px-3 border-bottom"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            textAlign: "left",
            zIndex: 1000,
          }}
        >
          <h5>Logged in as: {user}</h5>
        </div>
      )}

      {/* Main container */}
      <div
        className="container mt-5"
        style={{
          paddingTop: user ? "60px" : "0", // Add top padding if the user is logged in
        }}
      >
        {/* Login Screen */}
        {!user && (
          <Login
            newUser={newUser}
            handleChange={handleChange}
            logNewUser={logNewUser}
          />
        )}

        {/* Chat Messages Display */}
        {user && (
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
              <p className="text-muted">
                No messages yet. Start the conversation!
              </p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="mb-2">
                  <strong>{msg.user}: </strong>
                  <span>{msg.text}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Message Input Box */}
      {user && (
        <MessageInputBox
          value={currentMessage}
          onChange={handleMessageChange}
          onSubmit={handleSendMessage}
        />
      )}
    </main>
  );
}

export default App;
