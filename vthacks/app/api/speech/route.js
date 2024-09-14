// app/api/speech/route.js
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const { text } = await req.json();

  try {
    const response = await axios.post(
      "https://api.elevenlabs.io/v1/text-to-speech/daniel",
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
          "xi-api-key": process.env.ELEVENLABS_API_KEY,
        },
        responseType: "arraybuffer",
      }
    );

    return new Response(response.data, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error generating speech" },
      { status: 500 }
    );
  }
}
