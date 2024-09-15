"use client";
import { useState, useEffect } from "react";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);

  const handleChatSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/chat-with-speech", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage: input }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, isUser: true },
        { text: data.text, isUser: false },
      ]);
      const audioBlob = await fetch(data.audio).then((res) => res.blob());
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } else {
      console.error("Error:", data.error);
    }
    setInput("");
  };

  useEffect(() => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
      return () => {
        audio.pause();
        URL.revokeObjectURL(audioUrl);
      };
    }
  }, [audioUrl]);

  return (
    <div
      className={`fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg ${
        isOpen ? "h-96" : "h-12"
      } transition-all duration-300`}
    >
      <div
        className="flex items-center justify-between p-2 bg-gray-800 text-white rounded-t-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">
          {isOpen ? "Chat" : "Chatbox"}
        </span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        <FaTimes
          className="text-lg cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </div>
      {isOpen && (
        <div className="p-2 flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-1 p-2 rounded-lg ${
                  msg.isUser
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleChatSubmit} className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-l-lg"
              placeholder="Type a message..."
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-r-lg"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
