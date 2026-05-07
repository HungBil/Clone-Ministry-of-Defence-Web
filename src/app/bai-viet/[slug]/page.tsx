import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleBySlug, ARTICLES } from "@/lib/articles";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Không tìm thấy" };
  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = ARTICLES.filter(
    (a) => a.categorySlug === article.categorySlug && a.slug !== article.slug
  ).slice(0, 4);

  return (
    <>
      <Header />

      <div className="breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span>›</span>
        <Link href="/tin-tuc">Tin tức</Link>
        <span>›</span>
        <Link href={`/tin-tuc/${article.categorySlug}`}>{article.category}</Link>
        <span>›</span>
        <span style={{ color: "#555" }}>{article.title.slice(0, 60)}...</span>
      </div>

      <div className="article-page">
        {/* Main article */}
        <article className="article-detail">
          <div className="article-meta" style={{ marginBottom: 8 }}>
            <span className="article-category">{article.category}</span>
          </div>
          <h1>{article.title}</h1>
          <div className="article-detail-meta">
            <span>📅 {article.date}</span>
            <span>✍️ {article.author}</span>
          </div>

          {article.imageUrl && (
            <figure style={{ marginBottom: 20 }}>
              <img src={article.imageUrl} alt={article.title} style={{ width: "100%", borderRadius: 4 }} />
              <figcaption>{article.title}</figcaption>
            </figure>
          )}

          <div className="article-detail-body">
            {article.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <hr className="divider" />
          <p style={{ fontSize: 12, color: "#999" }}>
            Nguồn: Dữ liệu crawl từ{" "}
            <a href="http://bqp.vn" target="_blank" rel="noopener noreferrer" style={{ color: "#cc0000" }}>
              bqp.vn
            </a>{" "}
            — Đây là sản phẩm demo học thuật.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="section-title">Bài viết liên quan</div>
            <div className="sidebar-list">
              {related.length > 0 ? (
                related.map((a) => (
                  <Link key={a.slug} href={`/bai-viet/${a.slug}`} className="sidebar-list-item" style={{ display: "flex" }}>
                    {a.imageUrl ? (
                      <img src={a.imageUrl} alt={a.title} />
                    ) : (
                      <div style={{ width: 64, height: 48, background: "#003366", flexShrink: 0, borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 18 }}>★</div>
                    )}
                    <div>
                      <p>{a.title}</p>
                      <span>{a.date}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <p style={{ padding: "12px 14px", fontSize: 13, color: "#999" }}>Không có bài liên quan.</p>
              )}
            </div>
          </div>

          <div className="sidebar-section" style={{ padding: "16px", background: "linear-gradient(135deg, #001a33, #003366)", color: "white", textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 6 }}>🤖</div>
            <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, color: "#c8a44a" }}>Hỏi đáp AI về bài viết này</h3>
            <Link href="/chat" style={{ display: "inline-block", background: "#cc0000", color: "white", padding: "7px 14px", borderRadius: 4, fontSize: 12, fontWeight: 600 }}>
              Mở Chatbot →
            </Link>
          </div>
        </aside>
      </div>

      <Footer />
    </>
  );
}
