import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cổng thông tin điện tử Bộ Quốc phòng Việt Nam",
    template: "%s | Bộ Quốc phòng Việt Nam",
  },
  description:
    "Cổng thông tin điện tử Bộ Quốc phòng nước Cộng hòa xã hội chủ nghĩa Việt Nam - tin tức quốc phòng, an ninh, đối ngoại quốc phòng.",
  keywords: ["Bộ Quốc phòng", "quốc phòng Việt Nam", "BQP", "quân đội", "an ninh"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <div className="disclaimer-banner">
          ⚠️ Đây là sản phẩm demo học thuật được xây dựng từ dữ liệu công khai đã crawl. Đây KHÔNG phải website chính thức của Bộ Quốc phòng Việt Nam.
        </div>
        {children}
      </body>
    </html>
  );
}
