import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Bộ Quốc phòng Việt Nam</h4>
          <address>
            <p>Số 7 Nguyễn Tri Phương, Ba Đình, Hà Nội</p>
            <p>ĐT: (024) 38453131</p>
            <p>Email: vpbqp@mod.gov.vn</p>
          </address>
        </div>
        <div className="footer-col">
          <h4>Tin tức - Sự kiện</h4>
          <ul>
            <li><Link href="/tin-tuc/quoc-phong-an-ninh">Quốc phòng an ninh</Link></li>
            <li><Link href="/tin-tuc/doi-ngoai-quoc-phong">Đối ngoại quốc phòng</Link></li>
            <li><Link href="/tin-tuc/trong-nuoc">Trong nước</Link></li>
            <li><Link href="/tin-tuc/the-gioi">Thế giới</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Liên kết nhanh</h4>
          <ul>
            <li><Link href="/chat">Hỏi đáp AI (RAG)</Link></li>
            <li><Link href="/van-ban">Văn bản pháp luật</Link></li>
            <li><Link href="/hanh-chinh-cong">Hành chính công</Link></li>
            <li><a href="https://chinhphu.vn" target="_blank" rel="noopener noreferrer">Cổng thông tin Chính phủ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Về dự án này</h4>
          <p>
            Đây là sản phẩm demo học thuật được xây dựng từ dữ liệu công khai crawl từ bqp.vn. 
            Không phải website chính thức của Bộ Quốc phòng.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Demo học thuật | Dữ liệu crawl từ <a href="http://bqp.vn" style={{ color: "rgba(255,255,255,0.6)" }}>bqp.vn</a> | Không phải website chính thức</p>
      </div>
    </footer>
  );
}
