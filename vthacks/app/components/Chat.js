// components/Chat.js
import { useState } from "react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);

  const handleChatSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Fetch combined GPT + 11Labs response
    const response = await fetch("/api/chat-with-speech", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage: input }),
    });

    // Step 2: Convert response to audio blob and set as audio URL
    const audioBlob = await response.blob();
    const url = URL.createObjectURL(audioBlob);
    setAudioUrl(url);
  };

  return (
    <div className="chat-container">
      <form onSubmit={handleChatSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          placeholder="Ask a question..."
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      {audioUrl && <audio controls src={audioUrl} />}
    </div>
  );
};

export default Chat;
