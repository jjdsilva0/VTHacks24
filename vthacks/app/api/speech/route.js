import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const { text } = await req.json(); // Extract text from the request

  // Log the API key to ensure it's being loaded
  console.log("ELEVENLABS_API_KEY:", process.env.ELEVENLABS_API_KEY);

  try {
    const response = await axios.post(
      "https://api.elevenlabs.io/v1/text-to-speech/daniel", // Endpoint for generating speech
      {
        text,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": process.env.ELEVENLABS_API_KEY, // Use your API key from env
        },
        responseType: "arraybuffer", // Ensure response is in the correct format
      }
    );

    // Return the audio as a response
    return new Response(response.data, {
      headers: {
        "Content-Type": "audio/mpeg", // Specify audio type
      },
    });
  } catch (error) {
    // Log the full error for debugging
    console.error(
      "Error generating speech:",
      error.response?.data,
      error.message,
      error.stack
    );
    return NextResponse.json(
      { error: "Error generating speech" },
      { status: 500 }
    );
  }
}
