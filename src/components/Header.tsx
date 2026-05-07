"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Tin tức - Sự kiện",
    href: "/tin-tuc",
    children: [
      { label: "Quốc phòng an ninh", href: "/tin-tuc/quoc-phong-an-ninh" },
      { label: "Đối ngoại quốc phòng", href: "/tin-tuc/doi-ngoai-quoc-phong" },
      { label: "Trong nước", href: "/tin-tuc/trong-nuoc" },
      { label: "Thế giới", href: "/tin-tuc/the-gioi" },
    ],
  },
  { label: "Lãnh đạo Bộ", href: "/lanh-dao" },
  { label: "Văn bản pháp luật", href: "/van-ban" },
  { label: "Hành chính công", href: "/hanh-chinh-cong" },
  { label: "Hỏi đáp RAG", href: "/chat" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <span>Cổng thông tin điện tử Bộ Quốc phòng Việt Nam</span>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="http://bqp.vn" target="_blank" rel="noopener noreferrer">Website gốc</a>
            <Link href="/chat">Hỏi đáp AI</Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="header-logo">
            {/* Star emblem placeholder */}
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "radial-gradient(circle, #cc0000 0%, #7a0000 100%)",
              border: "3px solid #c8a44a",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 28, color: "#f8e080", flexShrink: 0,
            }}>★</div>
            <div className="logo-text">
              <h1>Bộ <span>Quốc phòng</span></h1>
              <p>Nước Cộng hoà Xã hội Chủ nghĩa Việt Nam</p>
            </div>
          </Link>

          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
            <div className="header-search">
              <input type="text" placeholder="Tìm kiếm..." id="search-input" />
              <button aria-label="Tìm kiếm">🔍</button>
            </div>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="main-nav" aria-label="Main navigation">
        <div className="nav-inner">
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <div className={`nav-desktop ${menuOpen ? "open" : ""}`} style={{ display: "flex" }}>
            {NAV_ITEMS.map((item) => (
              <div key={item.href} className="nav-item">
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="nav-dropdown">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href}>{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
