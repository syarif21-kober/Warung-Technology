"use client";

import { useState, useRef, useEffect } from "react";
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
        "Halo 👋 Saya Wartech AI Assistant.\n\nSaya siap membantu seputar:\n\n- Website Development\n- Aplikasi Mobile\n- AI & Automation\n- Jaringan Komputer\n- Konsultasi Teknologi\n\nSilakan tanyakan apa yang Anda butuhkan.",
    },
  ]);

  const bottomRef = useRef(null);

  // Simpan model pilihan user
  useEffect(() => {
    const savedModel = localStorage.getItem("wartech-model");

    if (savedModel) {
      setModel(savedModel);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wartech-model", model);
  }, [model]);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, loading]);

  async function sendMessage() {
    if (!message.trim() || loading) return;

    const currentMessage = message.trim();

    setChat((prev) => [
      ...prev,
      {
        role: "user",
        content: currentMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentMessage,
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
            "Maaf, terjadi kesalahan pada server.",
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
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-8">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Wartech AI Assistant
        </h1>

        <p className="text-gray-500 mt-2">
          Konsultasi teknologi, website,
          aplikasi, AI, jaringan, dan solusi
          digital untuk bisnis Anda.
        </p>
      </div>

      {/* MODEL SELECTOR */}
      <div className="mb-6">

        <h3 className="font-semibold mb-3">
          Pilih Model AI
        </h3>

        <div className="grid grid-cols-2 gap-3">

          <button
            type="button"
            onClick={() => setModel("gemini")}
            className={`py-3 rounded-xl border transition-all font-medium ${
              model === "gemini"
                ? "bg-black text-white border-black"
                : "bg-white border-gray-300"
            }`}
          >
            Gemini
          </button>

          <button
            type="button"
            onClick={() => setModel("groq")}
            className={`py-3 rounded-xl border transition-all font-medium ${
              model === "groq"
                ? "bg-black text-white border-black"
                : "bg-white border-gray-300"
            }`}
          >
            Groq
          </button>

        </div>

        <p className="text-sm text-gray-500 mt-3">
          Model aktif :
          <span className="font-semibold ml-1">
            {model === "gemini"
              ? " Gemini 2.5 Flash"
              : " Groq Llama 3.3"}
          </span>
        </p>

      </div>

      {/* CHAT WINDOW */}
      <div
        className="
          border
          rounded-2xl
          bg-gray-50
          h-[55vh]
          md:h-[65vh]
          overflow-y-auto
          p-4
          shadow-sm
          mb-4
        "
      >
        {chat.map((item, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              item.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[90%] md:max-w-[75%] p-4 rounded-2xl break-words ${
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
            <div className="bg-white border rounded-2xl px-4 py-3 shadow-sm">
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

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="flex flex-col md:flex-row gap-3">

        <textarea
          value={message}
          rows={3}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Tulis pertanyaan Anda..."
          className="
            flex-1
            border
            rounded-xl
            p-4
            resize-none
            text-base
            focus:outline-none
            focus:ring-2
            focus:ring-black
          "
        />

        <button
          type="button"
          onClick={sendMessage}
          disabled={loading}
          className="
            bg-black
            text-white
            px-6
            py-3
            rounded-xl
            hover:opacity-90
            disabled:opacity-50
            min-w-[120px]
          "
        >
          {loading
            ? "Memproses..."
            : "Kirim"}
        </button>

      </div>

    </section>
  );
}