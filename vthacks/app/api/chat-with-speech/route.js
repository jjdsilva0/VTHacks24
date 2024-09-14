// app/api/chat-with-speech/route.js
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const { userMessage } = await req.json();

  try {
    // Step 1: Get GPT response
    const gptResponse = await axios.post(
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

    const botMessage = gptResponse.data.choices[0].message.content;

    // Step 2: Convert GPT response to speech
    const ttsResponse = await axios.post(
      "https://api.elevenlabs.io/v1/text-to-speech/daniel",
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

    return new Response(ttsResponse.data, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error processing the request" },
      { status: 500 }
    );
  }
}
