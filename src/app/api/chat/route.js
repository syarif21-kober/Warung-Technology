import { NextResponse } from "next/server";
import { askGemini } from "@/lib/gemini";
import { askGroq } from "@/lib/groq";

export async function POST(req) {
  try {
    const { message, model } = await req.json();

    let answer = "";

    switch (model) {
      case "groq":
        answer = await askGroq(message);
        break;

      case "gemini":
      default:
        answer = await askGemini(message);
        break;
    }

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}