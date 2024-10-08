"use client";

import { useState, useEffect } from "react"; // Importing the useState and useEffect hooks from the React library.
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing some icons from the react-icons/fa library.

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false); // Creating a state variable isOpen and a function setIsOpen to control the open/close state of the chatbox.
  const [input, setInput] = useState(""); // Creating a state variable input and a function setInput to store the user's input in the chatbox.
  const [messages, setMessages] = useState([]); // Creating a state variable messages and a function setMessages to store the chat messages.
  const [audioUrl, setAudioUrl] = useState(null); // Creating a state variable audioUrl and a function setAudioUrl to store the URL of the audio file.

  const handleChatSubmit = async (e) => { // This function is called when the user submits a chat message.
    e.preventDefault(); // Preventing the default form submission behavior.

    const response = await fetch("/api/chat-with-speech", { // Sending a POST request to the "/api/chat-with-speech" endpoint.
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage: input + " Respond in 25 words or less." }), // Sending the user's input as JSON in the request body.
    });

    const data = await response.json(); // Parsing the response data as JSON.
    if (response.ok) { // If the response is successful (status code 200-299),
      setMessages((prevMessages) => [ // Updating the messages state by adding the user's input and the response text as new messages.
        ...prevMessages,
        { text: input, isUser: true },
        { text: data.text, isUser: false },
      ]);
      const audioBlob = await fetch(data.audio).then((res) => res.blob()); // Fetching the audio file from the response and converting it to a Blob.
      const url = URL.createObjectURL(audioBlob); // Creating a URL for the audio Blob.
      setAudioUrl(url); // Updating the audioUrl state with the created URL.
    } else {
      console.error("Error:", data.error); // If the response is not successful, logging the error message to the console.
    }
    setInput(""); // Clearing the input state.
  };

  useEffect(() => { // This effect runs when the audioUrl state changes.
    if (audioUrl) { // If there is a valid audio URL,
      const audio = new Audio(audioUrl); // Creating a new Audio object with the audio URL.
      audio.play(); // Playing the audio.
      return () => { // Cleanup function that runs when the component unmounts or when the audioUrl state changes.
        audio.pause(); // Pausing the audio.
        URL.revokeObjectURL(audioUrl); // Revoking the URL created for the audio Blob.
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
        onClick={() => setIsOpen(!isOpen)} // Toggling the isOpen state when the chatbox header is clicked.
      >
        <span className="text-lg font-semibold">
          {isOpen ? "Chat" : "Chatbox"}
        </span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        <FaTimes
          className="text-lg cursor-pointer"
          onClick={() => setIsOpen(false)} // Closing the chatbox when the close icon is clicked.
        />
      </div>
      {isOpen && ( // Rendering the chat messages and input form only if the chatbox is open.
        <div className="p-2 flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            {messages.map((msg, index) => ( // Mapping over the messages array and rendering each message as a div.
              <div
                key={index}
                className={`my-1 p-2 rounded-lg ${
                  msg.isUser
                    ? "bg-blue-500 text-white self-end" // Styling the user's messages with a blue background and white text.
                    : "bg-gray-200 text-black self-start" // Styling other messages with a gray background and black text.
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
              onChange={(e) => setInput(e.target.value)} // Updating the input state with the user's input.
              className="flex-1 p-2 border border-gray-300 rounded-l-lg"
              placeholder="Type a message..." // Placeholder text for the input field.
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

export default Chatbox; // Exporting the Chatbox component as the default export.
