"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "Bộ Quốc phòng Việt Nam có chức năng gì?",
  "Đại tướng Nguyễn Tân Cương là ai?",
  "Hợp tác quốc phòng Việt Nam - Thổ Nhĩ Kỳ gồm những gì?",
  "Hải quân Nhân dân Việt Nam được thành lập khi nào?",
  "Việt Nam và Cam-pu-chia hợp tác quốc phòng trong lĩnh vực gì?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Xin chào! Tôi là trợ lý AI được huấn luyện từ dữ liệu công khai của Bộ Quốc phòng Việt Nam (bqp.vn). Tôi có thể trả lời các câu hỏi về tin tức quốc phòng, đối ngoại quân sự và các hoạt động của Bộ Quốc phòng. Hãy đặt câu hỏi cho tôi!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text?: string) {
    const userText = text ?? input.trim();
    if (!userText || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Lỗi server");
      }

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Đã có lỗi xảy ra";
      setMessages([
        ...newMessages,
        { role: "assistant", content: `⚠️ Lỗi: ${msg}. Vui lòng kiểm tra API key hoặc thử lại.` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      <Header />

      <div className="breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span>›</span>
        <span style={{ color: "#555" }}>Hỏi đáp AI</span>
      </div>

      <div className="chat-page">
        <div className="chat-header">
          <h1>🤖 Trợ lý AI Quốc phòng</h1>
          <p>Hỏi đáp dựa trên dữ liệu crawl từ bqp.vn — Chỉ trả lời trong phạm vi dữ liệu đã thu thập</p>
        </div>

        {/* Suggested questions */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
          {SUGGESTED_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              disabled={loading}
              style={{
                background: "white", border: "1px solid #cc0000", color: "#cc0000",
                borderRadius: 16, padding: "5px 12px", fontSize: 12, cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#cc0000"; e.currentTarget.style.color = "white"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#cc0000"; }}
            >
              {q}
            </button>
          ))}
        </div>

        <div className="chat-container">
          <div className="chat-messages" id="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.role}`}>
                <div className="chat-avatar">
                  {msg.role === "user" ? "U" : "AI"}
                </div>
                <div className="chat-bubble">
                  {msg.content.split("\n").map((line, li) => (
                    <span key={li}>{line}{li < msg.content.split("\n").length - 1 && <br />}</span>
                  ))}
                </div>
              </div>
            ))}
            {loading && (
              <div className="chat-message assistant">
                <div className="chat-avatar">AI</div>
                <div className="chat-bubble">
                  <div className="chat-typing">
                    <span /><span /><span />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-area">
            <input
              id="chat-input"
              className="chat-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Nhập câu hỏi của bạn..."
              disabled={loading}
              autoComplete="off"
            />
            <button
              id="chat-send-btn"
              className="chat-send-btn"
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
            >
              Gửi
            </button>
          </div>
        </div>

        <p style={{ fontSize: 11, color: "#999", textAlign: "center", marginTop: 12 }}>
          ⚠️ AI chỉ trả lời dựa trên dữ liệu đã crawl từ bqp.vn. Không đưa ra tư vấn pháp lý hay quân sự chính thức.
        </p>
      </div>

      <Footer />
    </>
  );
}
