// src/pages/Signup.js

import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signing up with\nName: ${name}\nEmail: ${email}`);
    // TODO: Add real signup logic here
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Name:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
