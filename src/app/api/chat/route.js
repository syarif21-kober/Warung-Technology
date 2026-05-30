import { NextResponse } from "next/server";
import { askGemini } from "@/lib/gemini";
import { askDeepSeek } from "@/lib/deepseek";

export async function POST(req) {
  try {
    const { message, model } = await req.json();

    let answer = "";

    if (model === "deepseek") {
      answer = await askDeepSeek(message);
    } else {
      answer = await askGemini(message);
    }

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    return NextResponse.json(
      {
        answer: "Terjadi kesalahan server",
      },
      {
        status: 500,
      }
    );
  }
}