import React from "react";

const Login = ({ newUser, handleChange, logNewUser }) => {
  return (
    <div
      className="login-container d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f8f9fa" }} // Optional: light gray background
    >
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h5 className="text-center mb-4">Enter Username</h5>
        <input
          type="text"
          name="username"
          value={newUser}
          className="form-control mb-3"
          placeholder="Username"
          autoComplete="off"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.code === "Enter") logNewUser(); // Trigger login on Enter key
          }}
        />
        <button className="btn btn-success w-100" onClick={logNewUser}>
          Join
        </button>
      </div>
    </div>
  );
};

export default Login;
