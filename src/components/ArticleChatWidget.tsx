"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  articleTitle: string;
}

export default function ArticleChatWidget({ articleTitle }: Props) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Xin chào! Tôi có thể giải đáp thắc mắc về bài viết **"${articleTitle}"** hoặc các nội dung quốc phòng liên quan. Hãy đặt câu hỏi!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage(text?: string) {
    const userText = text ?? input.trim();
    if (!userText || loading) return;

    // Prepend article context to first user message
    const contextPrefix =
      messages.length === 1
        ? `[Bài viết đang xem: "${articleTitle}"] `
        : "";

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userText },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      // Send with article context injected in first message
      const apiMessages = newMessages.map((m, i) =>
        i === newMessages.length - 1 && newMessages.length === 2
          ? { ...m, content: contextPrefix + m.content }
          : m
      );

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
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
        { role: "assistant", content: `⚠️ ${msg}` },
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

  const suggestions = [
    "Tóm tắt bài viết này",
    "Ý nghĩa của sự kiện này?",
    "Các bên liên quan là ai?",
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #001a33, #003366)",
        borderRadius: 6,
        overflow: "hidden",
        color: "white",
        boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
      }}
    >
      {/* Header — toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 14px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "white",
          textAlign: "left",
        }}
        aria-expanded={open}
      >
        <span style={{ fontSize: 22 }}>🤖</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#c8a44a" }}>
            Hỏi đáp AI về bài viết này
          </div>
          <div style={{ fontSize: 11, opacity: 0.75, marginTop: 1 }}>
            {open ? "Nhấn để thu gọn ▲" : "Đặt câu hỏi ngay tại đây ▼"}
          </div>
        </div>
        <span
          style={{
            fontSize: 18,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s",
          }}
        >
          ⌄
        </span>
      </button>

      {/* Collapsible body */}
      {open && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Messages */}
          <div
            style={{
              height: 260,
              overflowY: "auto",
              padding: "12px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  gap: 6,
                  alignItems: "flex-end",
                }}
              >
                {msg.role === "assistant" && (
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#cc0000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    AI
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "8px 11px",
                    borderRadius: msg.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                    background: msg.role === "user" ? "#cc0000" : "rgba(255,255,255,0.1)",
                    fontSize: 12,
                    lineHeight: 1.5,
                    color: "white",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {msg.content.split("\n").map((line, li, arr) => (
                    <span key={li}>
                      {line}
                      {li < arr.length - 1 && <br />}
                    </span>
                  ))}
                </div>
                {msg.role === "user" && (
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    U
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", gap: 6, alignItems: "flex-end" }}>
                <div
                  style={{
                    width: 24, height: 24, borderRadius: "50%",
                    background: "#cc0000", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 700, flexShrink: 0,
                  }}
                >
                  AI
                </div>
                <div
                  style={{
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "12px 12px 12px 2px",
                    display: "flex",
                    gap: 4,
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((n) => (
                    <span
                      key={n}
                      style={{
                        width: 6, height: 6,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.6)",
                        animation: "bounce 1.2s infinite",
                        animationDelay: `${n * 0.2}s`,
                        display: "inline-block",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick suggestions */}
          <div
            style={{
              padding: "6px 14px",
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {suggestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                disabled={loading}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.85)",
                  borderRadius: 12,
                  padding: "3px 10px",
                  fontSize: 11,
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(204,0,0,0.4)";
                  e.currentTarget.style.borderColor = "#cc0000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input area */}
          <div
            style={{
              display: "flex",
              gap: 6,
              padding: "10px 14px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Nhập câu hỏi..."
              disabled={loading}
              autoComplete="off"
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 6,
                padding: "7px 10px",
                fontSize: 12,
                color: "white",
                outline: "none",
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              style={{
                background: loading || !input.trim() ? "rgba(204,0,0,0.4)" : "#cc0000",
                border: "none",
                borderRadius: 6,
                color: "white",
                padding: "7px 12px",
                fontSize: 12,
                fontWeight: 700,
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                transition: "background 0.15s",
                whiteSpace: "nowrap",
              }}
            >
              {loading ? "..." : "Gửi →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
