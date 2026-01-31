import { useState } from "react";
import axiosInstance from "../api/axios";
import { Send, Bot, User, AlertTriangle, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function AiHealthChatbot() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hi I’m your health assistant. Tell me your symptoms and I’ll guide you on what to do next.",
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axiosInstance.post("/auth/chat", {
        message: userMessage.text,
      });

      const aiMessage: Message = {
        role: "ai",
        text: res.data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, I couldn’t process that right now. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);  
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-base-200">

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        {/* Header */}
        <div className="mb-4">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-base-content">
            AI Health Assistant
          </h1>
          <p className="text-sm text-base-content/70 mt-1">
            Describe your symptoms to receive general guidance.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="alert alert-warning mb-4">
          <AlertTriangle size={18} />
          <span className="text-sm">
            This chatbot does not provide medical diagnosis. Always consult a
            certified doctor.
          </span>
        </div>

        {/* Chat Box */}
        <div className="bg-base-100 rounded-xl shadow p-4 h-[60vh] overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] p-3 rounded-xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-primary-content"
                    : "bg-base-300 text-base-content"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {msg.role === "user" ? (
                    <User size={14} />
                  ) : (
                    <Bot size={14} />
                  )}
                  <span className="font-semibold">
                    {msg.role === "user" ? "You" : "Assistant"}
                  </span>
                </div>
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-base-300 p-3 rounded-xl text-sm">
                Typing...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Describe your symptoms..."
            className="input input-bordered flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}  
          />
          <button
            className="btn btn-primary"
            onClick={sendMessage}
            disabled={loading}
          >
            <Send size={18} />
          </button>
        </div>
      </main>

    </div>
  );
}
