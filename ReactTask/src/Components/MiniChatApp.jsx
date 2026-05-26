import React, { useState } from "react";
import "./MiniChatApp.css";

function MiniChatApp() {
  const [message, setMessage] = useState("");
  const [listMessage, setListMessage] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    if (message.trim() === "") {
      return;
    }

    setListMessage([...listMessage, message]);
    setMessage("");
  };

  return (
    <div className="chat-container">
      <h1 className="title">Mini Chat Application</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          name="message"
          onChange={handleChange}
          className="chat-input"
        />

        <button onClick={handleClick} className="send-btn">
          Send Message
        </button>
      </div>

      <ul className="message-list">
        {listMessage.map((data, index) => (
          <li key={index} className="message-item">
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MiniChatApp;
