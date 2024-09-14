import { useState } from "react";

const Chat = () => {
  const [input, setInput] = useState("");
  const [responseText, setResponseText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);

  const handleChatSubmit = async (e) => {
    e.preventDefault();

    // Step 1: Fetch combined GPT + 11Labs response
    const response = await fetch("/api/chat-with-speech", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage: input }),
    });

    // Step 2: Convert response to JSON and extract text and audio
    const data = await response.json();
    if (response.ok) {
      setResponseText(data.text);
      const audioBlob = await fetch(data.audio).then((res) => res.blob());
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } else {
      console.error("Error:", data.error);
    }
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
      {responseText && <p>{responseText}</p>}
      {audioUrl && <audio controls src={audioUrl} />}
    </div>
  );
};

export default Chat;
