import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/lib/articles";
import { proxyImage } from "@/lib/proxyImage";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

const CATEGORY_MAP: Record<string, string> = {
  "quoc-phong-an-ninh": "Quốc phòng an ninh",
  "doi-ngoai-quoc-phong": "Đối ngoại quốc phòng",
  "trong-nuoc": "Trong nước",
  "the-gioi": "Thế giới",
};

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((c) => ({ category: c }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  return { title: CATEGORY_MAP[category] ?? "Tin tức" };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const label = CATEGORY_MAP[category] ?? "Tin tức";
  const articles = ARTICLES.filter((a) => a.categorySlug === category);

  return (
    <>
      <Header />
      <div className="breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span>›</span>
        <Link href="/tin-tuc">Tin tức</Link>
        <span>›</span>
        <span style={{ color: "#555" }}>{label}</span>
      </div>

      <div className="main-container">
        <div>
          <div className="section-title">{label}</div>
          {articles.length === 0 ? (
            <p style={{ padding: "20px 0", color: "#777" }}>Chưa có bài viết trong chuyên mục này.</p>
          ) : (
            <div className="article-list">
              {articles.map((article) => (
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
          )}
        </div>

        <aside className="sidebar">
          <div className="sidebar-section">
            <div className="section-title">Chuyên mục khác</div>
            <div className="quick-links">
              {Object.entries(CATEGORY_MAP)
                .filter(([slug]) => slug !== category)
                .map(([slug, name]) => (
                  <Link key={slug} href={`/tin-tuc/${slug}`}>{name}</Link>
                ))}
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </>
  );
}
