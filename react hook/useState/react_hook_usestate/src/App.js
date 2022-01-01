import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleNameChange(e) {
    setName(e.target.value);
  }
  return (
    <div className="App">
      <input type="email" onChange={handleEmailChange} />
      <input type="text" onChange={handleNameChange} />
      <p>Email: {email}</p>
      <p>Name: {name}</p>
    </div>
  );
}

export default App;
