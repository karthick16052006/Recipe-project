// src/pages/Login.js
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    alert(`Logged in as ${username}`);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
