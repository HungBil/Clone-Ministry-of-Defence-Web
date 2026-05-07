import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/lib/articles";
import { proxyImage } from "@/lib/proxyImage";

const FEATURED = ARTICLES[0];
const MAIN_NEWS = ARTICLES.slice(1, 5);
const SIDEBAR_NEWS = ARTICLES.slice(0, 5);
const FOREIGN_NEWS = ARTICLES.filter((a) => a.categorySlug === "doi-ngoai-quoc-phong").slice(0, 4);

const QUICK_LINKS = [
  { label: "Hành chính công", href: "/hanh-chinh-cong" },
  { label: "Hỏi đáp AI (RAG Chatbot)", href: "/chat" },
  { label: "Văn bản pháp luật", href: "/van-ban" },
  { label: "Lịch công tác Bộ trưởng", href: "/lanh-dao" },
  { label: "Đường dây nóng", href: "#" },
  { label: "Phản ánh kiến nghị", href: "#" },
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Trang chủ</Link>
      </div>

      <main className="main-container">
        {/* LEFT: Main content */}
        <div>
          {/* Section: Tin tức nổi bật */}
          <div className="section-title">Tin tức - Sự kiện</div>

          {/* Featured article */}
          <Link href={`/bai-viet/${FEATURED.slug}`} className="featured-article" style={{ display: "block" }}>
            <div className="featured-img-wrap">
              <img src={proxyImage(FEATURED.imageUrl)} alt={FEATURED.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="featured-content">
              <div className="article-meta">
                <span className="article-category">{FEATURED.category}</span>
                <span>{FEATURED.date}</span>
                <span>{FEATURED.author}</span>
              </div>
              <h2>{FEATURED.title}</h2>
              <p>{FEATURED.description}</p>
            </div>
          </Link>

          {/* Article list */}
          <div className="article-list">
            {MAIN_NEWS.map((article) => (
              <Link key={article.slug} href={`/bai-viet/${article.slug}`} className="article-card" style={{ display: "flex" }}>
                <img src={proxyImage(article.imageUrl)} alt={article.title} className="article-card-img" />
                <div className="article-card-body">
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/tin-tuc" className="view-all-link">Xem tất cả tin tức →</Link>

          {/* Section: Đối ngoại quốc phòng */}
          <div className="section-title" style={{ marginTop: 28 }}>Đối ngoại Quốc phòng</div>
          <div className="article-list">
            {FOREIGN_NEWS.map((article) => (
              <Link key={article.slug} href={`/bai-viet/${article.slug}`} className="article-card" style={{ display: "flex" }}>
                <img src={proxyImage(article.imageUrl)} alt={article.title} className="article-card-img" />
                <div className="article-card-body">
                  <div className="article-meta">
                    <span>{article.date}</span>
                    <span>{article.author}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/tin-tuc/doi-ngoai-quoc-phong" className="view-all-link">Xem thêm →</Link>
        </div>

        {/* RIGHT: Sidebar */}
        <aside className="sidebar">
          {/* Quick links */}
          <div className="sidebar-section">
            <div className="section-title">Dịch vụ nhanh</div>
            <div className="quick-links">
              {QUICK_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Tiêu điểm */}
          <div className="sidebar-section">
            <div className="section-title">Tiêu điểm</div>
            <div className="sidebar-list">
              {SIDEBAR_NEWS.map((article) => (
                <Link key={article.slug} href={`/bai-viet/${article.slug}`} className="sidebar-list-item" style={{ display: "flex" }}>
                  <img src={proxyImage(article.imageUrl)} alt={article.title} style={{ width: 64, height: 48, objectFit: "cover", flexShrink: 0, borderRadius: 3 }} />
                  <div>
                    <p>{article.title}</p>
                    <span>{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Chat bot CTA */}
          <div className="sidebar-section" style={{ padding: "16px", background: "linear-gradient(135deg, #001a33, #003366)", color: "white", textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🤖</div>
            <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, color: "#c8a44a" }}>Hỏi đáp AI về Quốc phòng</h3>
            <p style={{ fontSize: 12, opacity: 0.8, marginBottom: 12 }}>Đặt câu hỏi, nhận câu trả lời từ cơ sở dữ liệu quốc phòng</p>
            <Link href="/chat" style={{ display: "inline-block", background: "#cc0000", color: "white", padding: "8px 16px", borderRadius: 4, fontSize: 13, fontWeight: 600 }}>
              Hỏi ngay →
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
}
