"use client";

import { useState, useEffect } from "react"; // Importing the useState and useEffect hooks from the React library.

const Chatbubble = () => {
  const [isOpen, setIsOpen] = useState(false); // Creating a state variable isOpen and a function setIsOpen to control the open/close state of the chatbox.
  const [input, setInput] = useState(""); // Creating a state variable input and a function setInput to store the user's input in the chatbox.
  const [messages, setMessages] = useState([]); // Creating a state variable messages and a function setMessages to store the chat messages.
  const [audioUrl, setAudioUrl] = useState(null); // Creating a state variable audioUrl and a function setAudioUrl to store the URL of the audio file.
  const [isLoading, setIsLoading] = useState(false); // Creating a state variable loading and a function setIsLoading to control the loading state.

  const handleChatSubmit = async (e) => { // This function is called when the user submits a chat message.
    e.preventDefault(); // Preventing the default form submission behavior.
    setIsLoading(true); // Setting the loading state to true.

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
    setIsLoading(false); // Setting the loading state to false.
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
    <>
        <div className="fixed z-20 bottom-10 left-0 w-[90%] h-[90%]">
            <div className="chat chat-end w-full h-full">
                <div className="chat-bubble w-full h-full">
                    <div className="p-2 flex flex-col h-full">
                        <div className="flex-1 overflow-y-auto">
                            {messages.map((msg, index) => ( // Mapping over the messages array and rendering each message as a div.
                            <div
                                key={index}
                                className={`my-1 p-2 rounded-lg ${
                                msg.isUser
                                    ? "bg-primary self-end" // Styling the user's messages with a blue background and white text.
                                    : "bg-secondary self-start" // Styling other messages with a gray background and black text.
                                }`}
                            >
                                {msg.text}
                            </div>
                            ))}
                            {isLoading && <span className="loading loading-dots loading-lg"></span>} {/* Conditionally render the loader */}
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
                            className="p-2 bg-primary rounded-r-lg"
                            >
                            Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Chatbubble;