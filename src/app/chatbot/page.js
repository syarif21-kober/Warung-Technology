"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatBotPage() {
  const [model, setModel] = useState("gemini");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [chat, setChat] = useState([
    {
      role: "assistant",
      content:
        "Halo 👋, saya Wartech AI Assistant. Ada yang bisa saya bantu hari ini?",
    },
  ]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setChat((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
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

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.answer ||
            data.error ||
            "Maaf, terjadi kesalahan.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Terjadi kesalahan saat menghubungi server.",
        },
      ]);
    }

    setMessage("");
    setLoading(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold">
          Wartech AI Assistant
        </h1>

        <p className="text-gray-500 mt-2">
          Konsultasi teknologi, website, aplikasi,
          jaringan, dan solusi digital.
        </p>
      </div>

      {/* Model Selector */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Pilih Model AI
        </label>

        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="gemini">
            Gemini 2.5 Flash
          </option>

          <option value="groq">
            Groq Llama 3.3
          </option>
        </select>
      </div>

      {/* Chat Window */}
      <div className="border rounded-2xl h-[600px] overflow-y-auto p-5 bg-gray-50 mb-4">
        {chat.map((item, index) => (
          <div
            key={index}
            className={`mb-5 flex ${
              item.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                item.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white border"
              }`}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
              >
                {item.content}
              </ReactMarkdown>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border rounded-2xl p-4">
              <div className="flex gap-2">
                <span className="animate-bounce">
                  ●
                </span>
                <span className="animate-bounce">
                  ●
                </span>
                <span className="animate-bounce">
                  ●
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-3">
        <textarea
          rows={2}
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Tulis pertanyaan Anda..."
          className="flex-1 border rounded-xl p-4 resize-none"
        />

        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-black text-white px-6 rounded-xl hover:opacity-90 disabled:opacity-50"
        >
          Kirim
        </button>
      </div>
    </section>
  );
}