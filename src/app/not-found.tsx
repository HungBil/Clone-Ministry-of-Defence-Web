import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="not-found">
        <h1>404</h1>
        <h2>Trang không tồn tại</h2>
        <p>Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
        <Link href="/" className="btn-primary">← Về trang chủ</Link>
      </div>
      <Footer />
    </>
  );
}
