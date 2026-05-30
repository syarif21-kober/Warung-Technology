"use client";

import { useState } from "react";

export default function ChatBotPage() {
  const [message, setMessage] = useState("");
  const [model, setModel] = useState("gemini");
  const [messages, setMessages] = useState([]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        model,
      }),
    });

    const data = await response.json();

    setMessages((prev) => [
      ...prev,
      userMessage,
      {
        role: "assistant",
        content: data.answer,
      },
    ]);

    setMessage("");
  }

  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-5xl font-bold mb-8">
        Wartech AI Assistant
      </h1>

      <div className="mb-4">
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="gemini">Gemini</option>
          <option value="deepseek">DeepSeek</option>
        </select>
      </div>

      <div className="border rounded-xl h-[500px] overflow-y-auto p-5 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.role === "user"
                ? "text-right"
                : "text-left"
            }`}
          >
            <div className="inline-block bg-gray-100 p-3 rounded-xl">
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border flex-1 p-3 rounded-xl"
          placeholder="Tulis pertanyaan..."
        />

        <button
          onClick={sendMessage}
          className="bg-black text-white px-6 rounded-xl"
        >
          Kirim
        </button>
      </div>
    </section>
  );
}