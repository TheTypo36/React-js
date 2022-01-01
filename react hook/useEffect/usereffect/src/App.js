import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userId, setUserId] = useState(1);
  const [User, setUser] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, [userId]);
  return (
    <div>
      <button
        onClick={() => {
          setUserId(2);
        }}
      >
        <p>`go to UserId {userId}`</p>
      </button>
      {User.map((post) => (
        <div>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
