// app/api/chat/route.js
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req) {
  const { userMessage } = await req.json();

  try {
    const response = await axios.post(
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

    const botMessage = response.data.choices[0].message.content;
    return NextResponse.json({ botMessage });
  } catch (error) {
    console.error(
      "Error from OpenAI API:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { error: "Error processing the request" },
      { status: 500 }
    );
  }
}
