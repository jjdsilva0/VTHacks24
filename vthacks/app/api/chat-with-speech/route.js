// app/api/chat-with-speech/route.js
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const { userMessage } = await req.json(); // Extract userMessage from request

  console.log("Received message:", userMessage);

  try {
    // Request to OpenAI API for chat response
    const chatResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: userMessage }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const botMessage = chatResponse.data.choices[0].message.content;

    console.log("Chat response:", botMessage);

    // Request to 11Labs for text-to-speech conversion
    const speechResponse = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/onwK4e9ZLuTAKqWW03F9`,
      {
        text: botMessage,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": process.env.ELEVENLABS_API_KEY,
        },
        responseType: "arraybuffer",
      }
    );

    console.log("Speech response received");

    // Return both text and audio data
    return NextResponse.json({
      text: botMessage,
      audio:
        "data:audio/mpeg;base64," +
        Buffer.from(speechResponse.data).toString("base64"),
    });
  } catch (error) {
    // Log the full error for debugging
    console.error(
      "Error in chat-with-speech API:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    );
  }
}
