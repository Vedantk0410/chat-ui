import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";

import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Chat from "./components/Chat";

function App() {
  const [newUser, setNewUser] = useState(""); // For the input field
  const [user, setUser] = useState(""); // For logged-in user

  // Handle username input change
  const handleChange = ({ currentTarget: input }) => {
    setNewUser(input.value);
  };

  // Log in a new user
  const logNewUser = () => {
    if (newUser.trim()) {
      setUser(newUser);
      setNewUser(""); // Clear the input field after setting the user
    }
  };

  return (
    <div className="content">
      {/* Debugging logs */}
      {console.log("Rendering App", { newUser, user })}

      {/* "Logged in as" message fixed at the top-left */}
      {user && <Chat user={user} />}

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
      </div>
    </div>
  );
}

export default App;
