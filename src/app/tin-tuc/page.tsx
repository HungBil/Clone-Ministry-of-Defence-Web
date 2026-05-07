import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tin tức - Sự kiện" };

export default function NewsPage() {
  return (
    <>
      <Header />
      <div className="breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span>›</span>
        <span style={{ color: "#555" }}>Tin tức - Sự kiện</span>
      </div>

      <div className="main-container">
        <div>
          <div className="section-title">Tất cả Tin tức - Sự kiện</div>
          <div className="article-list">
            {ARTICLES.map((article) => (
              <Link key={article.slug} href={`/bai-viet/${article.slug}`} className="article-card" style={{ display: "flex" }}>
                {article.imageUrl ? (
                  <img src={article.imageUrl} alt={article.title} className="article-card-img" />
                ) : (
                  <div className="article-card-img" style={{ background: "#003366", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, padding: 6 }}>
                    {article.category}
                  </div>
                )}
                <div className="article-card-body">
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                    <span>{article.date}</span>
                    <span>{article.author}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="section-title">Chuyên mục</div>
            <div className="quick-links">
              <Link href="/tin-tuc/quoc-phong-an-ninh">Quốc phòng an ninh</Link>
              <Link href="/tin-tuc/doi-ngoai-quoc-phong">Đối ngoại quốc phòng</Link>
              <Link href="/tin-tuc/trong-nuoc">Trong nước</Link>
              <Link href="/tin-tuc/the-gioi">Thế giới</Link>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </>
  );
}
