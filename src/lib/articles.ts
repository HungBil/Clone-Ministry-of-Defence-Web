export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  categorySlug: string;
  author: string;
  description: string;
  body: string;
  imageUrl?: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "dai-tuong-nguyen-tan-cuong-tiep-xuc-cu-tri-tinh-dong-thap",
    title: "Đại tướng Nguyễn Tân Cương tiếp xúc cử tri tỉnh Đồng Tháp",
    date: "06/05/2026",
    category: "Quốc phòng an ninh",
    categorySlug: "quoc-phong-an-ninh",
    author: "Nguyễn Đức",
    description:
      "Sáng 6/5, Đại tướng Nguyễn Tân Cương, Tổng Tham mưu trưởng, Thứ trưởng Bộ Quốc phòng, cùng Đoàn đại biểu Quốc hội tỉnh Đồng Tháp tiếp xúc cử tri sau Kỳ họp thứ nhất, Quốc hội khóa XVI.",
    body: `Sáng 6/5, Đại tướng Nguyễn Tân Cương, Ủy viên Trung ương Đảng, Ủy viên Thường vụ Quân ủy Trung ương, Tổng Tham mưu trưởng, Thứ trưởng Bộ Quốc phòng, Đại biểu Quốc hội khóa XVI, cùng Đoàn đại biểu Quốc hội tỉnh Đồng Tháp tiếp xúc cử tri các phường: Mỹ Tho, Đạo Thạnh, Trung An, Thới Sơn, Mỹ Phong (tỉnh Đồng Tháp) sau Kỳ họp thứ nhất, Quốc hội khóa XVI.

Tại buổi tiếp xúc, hơn 400 cử tri đã được xem video clip báo cáo vắn tắt về kết quả Kỳ họp thứ nhất, Quốc hội khóa XVI. Sau nhiều ngày làm việc khẩn trương, nghiêm túc, trách nhiệm và hiệu quả, tại kỳ họp, Quốc hội đã xem xét và quyết định thông qua nhiều nội dung có ý nghĩa quan trọng đối với đất nước, như: Kiện toàn tổ chức bộ máy, quyết định công tác nhân sự cấp cao của Nhà nước nhiệm kỳ 2026 - 2031; thông qua 9 luật, 5 nghị quyết quy phạm pháp luật.

Các cử tri bày tỏ phấn khởi, đồng tình trước các chủ trương, chính sách lớn của Đảng, Nhà nước; thẳng thắn nêu lên nhiều vấn đề liên quan đến pháp luật hình sự, chính sách bảo hiểm y tế, biến đổi khí hậu như hạn hán, xâm nhập mặn, ảnh hưởng trực tiếp đến đời sống, sản xuất nông nghiệp của người dân địa phương.

Thay mặt đoàn Đại biểu Quốc hội tỉnh Đồng Tháp, Đại tướng Nguyễn Tân Cương cảm ơn các ý kiến phát biểu thẳng thắn, tâm huyết của các cử tri; giải đáp một số nội dung thuộc thẩm quyền mà cử tri quan tâm; đồng thời thông tin thêm về kết quả Kỳ họp thứ nhất, Quốc hội khóa XVI và một số kết quả nổi bật trong thực hiện nhiệm vụ quân sự, quốc phòng toàn quân thời gian qua.

Đại tướng Nguyễn Tân Cương mong muốn cử tri tiếp tục đồng hành chặt chẽ cùng cấp ủy, chính quyền và các cơ quan chức năng địa phương; kịp thời phát hiện, chủ động phòng ngừa, đấu tranh hiệu quả với các loại tội phạm, góp phần giữ vững an ninh trật tự trên địa bàn.`,
    imageUrl: "/images/article-1.jpg",
  },
  {
    slug: "thuc-day-hop-tac-phap-luat-quan-su-viet-nam-campuchia",
    title: "Thúc đẩy hợp tác trong lĩnh vực pháp luật quân sự, quốc phòng giữa Việt Nam - Cam-pu-chia",
    date: "07/05/2026",
    category: "Đối ngoại quốc phòng",
    categorySlug: "doi-ngoai-quoc-phong",
    author: "Văn Hiển",
    description:
      "Từ ngày 4 - 8/5, Đoàn cán bộ Cục Pháp chế Bộ Quốc phòng Việt Nam do Đại tá Vũ Văn Kiệm làm Trưởng đoàn có chuyến thăm và làm việc tại Cam-pu-chia.",
    body: `Từ ngày 4 - 8/5, Đoàn cán bộ Cục Pháp chế Bộ Quốc phòng Việt Nam do Đại tá Vũ Văn Kiệm, Phó Cục trưởng Cục Pháp chế Bộ Quốc phòng làm Trưởng đoàn có chuyến thăm và làm việc tại Cam-pu-chia.

Trong khuôn khổ chuyến thăm, Đoàn cán bộ Cục Pháp chế Bộ Quốc phòng Việt Nam đã đến chào xã giao Quốc vụ khanh Bộ Quốc phòng Cam-pu-chia; hội đàm với Cục Pháp chế Bộ Quốc phòng Cam-pu-chia; thăm, giới thiệu các chuyên đề về Luật Nghĩa vụ quân sự của Việt Nam tại một số đơn vị thuộc Quân đội Hoàng gia Cam-pu-chia.

Đại tá Vũ Văn Kiệm cho biết, thực hiện Bản ghi nhớ giữa Bộ Quốc phòng Việt Nam và Bộ Quốc phòng Cam-pu-chia về hợp tác trong lĩnh vực pháp luật quân sự, quốc phòng (ký năm 2025), thời gian qua, Cục Pháp chế Bộ Quốc phòng Việt Nam và Cục Pháp chế Bộ Quốc phòng Cam-pu-chia đã duy trì và thực hiện rất tốt các nội dung hợp tác giữa hai bên.

Phát biểu tại hội đàm, Đại tướng Mam Sophat, Cục trưởng Cục Pháp chế Bộ Quốc phòng Cam-pu-chia bày tỏ cảm ơn lãnh đạo Bộ Quốc phòng Việt Nam luôn tạo điều kiện hỗ trợ, giúp đỡ để cơ quan pháp chế hai Bộ Quốc phòng triển khai hiệu quả các nội dung hợp tác.

Trên cơ sở những kết quả đã đạt được, thời gian tới, hai bên xác định tiếp tục tăng cường hơn nữa mối quan hệ hợp tác, trao đổi kinh nghiệm, hỗ trợ lẫn nhau trong thực hiện nhiệm vụ, như: Xây dựng pháp luật về quân sự, quốc phòng, mô hình tổ chức của tổ chức pháp chế; đào tạo, bồi dưỡng, tập huấn cho cán bộ pháp chế Quân đội hai nước.`,
    imageUrl: "/images/article-2.jpg",
  },
  {
    slug: "viet-nam-tho-nhi-ky-tang-cuong-hop-tac-quoc-phong",
    title: "Việt Nam và Thổ Nhĩ Kỳ tăng cường hợp tác quốc phòng thiết thực, hiệu quả",
    date: "06/05/2026",
    category: "Đối ngoại quốc phòng",
    categorySlug: "doi-ngoai-quoc-phong",
    author: "Minh Tuấn - Kiều Trinh",
    description:
      "Trong khuôn khổ chuyến thăm Thổ Nhĩ Kỳ, dự Triển lãm Quốc phòng và Hàng không vũ trụ (SAHA) 2026, Thượng tướng Nguyễn Trường Thắng đã chào xã giao Bộ trưởng Bộ Quốc phòng Thổ Nhĩ Kỳ Yasar Guler.",
    body: `Trong khuôn khổ chuyến thăm Thổ Nhĩ Kỳ, dự Triển lãm Quốc phòng và Hàng không vũ trụ (SAHA) 2026, chiều 6/5, Thượng tướng Nguyễn Trường Thắng, Ủy viên Trung ương Đảng, Ủy viên Thường vụ Quân ủy Trung ương, Thứ trưởng Bộ Quốc phòng đã chào xã giao Bộ trưởng Bộ Quốc phòng Thổ Nhĩ Kỳ Yasar Guler.

Thượng tướng Nguyễn Trường Thắng nhấn mạnh, Việt Nam đánh giá cao vai trò, vị thế của Thổ Nhĩ Kỳ trên trường quốc tế và khu vực, coi Thổ Nhĩ Kỳ là một trong những đối tác quan trọng hàng đầu tại khu vực. Thời gian qua, hợp tác quốc phòng hai bên đã đạt nhiều kết quả tích cực trên các lĩnh vực.

Thượng tướng Nguyễn Trường Thắng chuyển lời mời của Đại tướng Phan Văn Giang, Bộ trưởng Bộ Quốc phòng Việt Nam tới Bộ trưởng Yasar Guler cùng đoàn doanh nghiệp quốc phòng Thổ Nhĩ Kỳ tham dự Triển lãm Quốc phòng quốc tế Việt Nam lần thứ ba vào tháng 12/2026 tại Việt Nam.

Chào mừng đoàn sang thăm, Bộ trưởng Yasar Guler khẳng định Việt Nam là đối tác quan trọng trong khu vực châu Á - Thái Bình Dương của Thổ Nhĩ Kỳ, mong muốn hợp tác quốc phòng giữa hai nước ngày càng phát triển lên tầm cao mới, sâu rộng, thiết thực, hiệu quả.`,
    imageUrl: "/images/article-3.jpg",
  },
  {
    slug: "phat-huy-truyen-thong-hai-quan-cach-mang-chinh-quy",
    title: "Phát huy truyền thống anh hùng, xây dựng Quân chủng Hải quân cách mạng, chính quy, tinh nhuệ, hiện đại",
    date: "05/05/2026",
    category: "Quốc phòng an ninh",
    categorySlug: "quoc-phong-an-ninh",
    author: "Ban Biên tập",
    description:
      "Quân chủng Hải quân Nhân dân Việt Nam không ngừng phát huy truyền thống anh hùng, xây dựng lực lượng ngày càng vững mạnh, hiện đại, bảo vệ vững chắc chủ quyền biển đảo thiêng liêng của Tổ quốc.",
    body: `Quân chủng Hải quân Nhân dân Việt Nam được thành lập ngày 7/5/1955, trải qua hơn 70 năm xây dựng, chiến đấu và trưởng thành, Hải quân Nhân dân Việt Nam đã lập nên nhiều chiến công hiển hách, góp phần quan trọng vào sự nghiệp đấu tranh giải phóng dân tộc, thống nhất đất nước và bảo vệ Tổ quốc.

Hiện nay, trong bối cảnh tình hình thế giới và khu vực có nhiều diễn biến phức tạp, khó lường, Quân chủng Hải quân luôn quán triệt sâu sắc và thực hiện đúng đắn đường lối, chủ trương của Đảng, chính sách, pháp luật của Nhà nước về bảo vệ chủ quyền biển, đảo.

Quân chủng Hải quân đã và đang tập trung xây dựng lực lượng theo hướng cách mạng, chính quy, tinh nhuệ, hiện đại. Công tác huấn luyện, sẵn sàng chiến đấu được duy trì nghiêm túc, chất lượng ngày càng được nâng cao.

Các đơn vị Hải quân luôn hoàn thành xuất sắc nhiệm vụ tuần tra, kiểm soát, bảo vệ vùng biển, đảo; phối hợp chặt chẽ với các lực lượng khác trong thực hiện nhiệm vụ tìm kiếm cứu nạn, ứng phó thiên tai, dịch bệnh trên biển.`,
    imageUrl: "/images/article-4.jpg",
  },
  {
    slug: "thuong-tuong-nguyen-truong-thang-trien-lam-quoc-phong-tho-nhi-ky",
    title: "Thượng tướng Nguyễn Trường Thắng tham dự Triển lãm Quốc phòng và Hàng không vũ trụ 2026 tại Thổ Nhĩ Kỳ",
    date: "05/05/2026",
    category: "Đối ngoại quốc phòng",
    categorySlug: "doi-ngoai-quoc-phong",
    author: "Minh Tuấn",
    description:
      "Thượng tướng Nguyễn Trường Thắng, Thứ trưởng Bộ Quốc phòng dẫn đầu đoàn đại biểu Quân sự cấp cao Việt Nam tham dự Triển lãm Quốc phòng và Hàng không vũ trụ SAHA 2026 tại Ankara, Thổ Nhĩ Kỳ.",
    body: `Triển lãm Quốc phòng và Hàng không vũ trụ SAHA 2026 diễn ra tại Ankara, Thổ Nhĩ Kỳ, thu hút sự tham gia của hàng trăm doanh nghiệp công nghiệp quốc phòng hàng đầu thế giới.

Thượng tướng Nguyễn Trường Thắng đã dẫn đầu đoàn đại biểu Quân sự cấp cao Việt Nam tham dự sự kiện quan trọng này, thể hiện sự quan tâm của Việt Nam đối với hợp tác công nghiệp quốc phòng quốc tế.

Tại triển lãm, đoàn Việt Nam đã thăm quan các gian trưng bày của nhiều tập đoàn công nghiệp quốc phòng lớn, trao đổi về khả năng hợp tác trong các lĩnh vực như đóng tàu, hàng không, vũ khí, đạn dược và thiết bị điện tử quân sự.

Chuyến tham dự triển lãm là cơ hội để Việt Nam quảng bá hình ảnh, tiềm năng và nhu cầu hợp tác quốc phòng, đồng thời học hỏi kinh nghiệm, tiếp cận công nghệ quốc phòng tiên tiến của các nước.`,
    imageUrl: "/images/article-5.jpg",
  },
  {
    slug: "bo-quoc-phong-cong-bo-du-an-nha-o-dong-son",
    title: "Bộ Quốc phòng công bố thông tin dự án Nhà ở cho gia đình lực lượng vũ trang tại phường Đông Sơn, Thanh Hóa",
    date: "04/05/2026",
    category: "Quốc phòng an ninh",
    categorySlug: "quoc-phong-an-ninh",
    author: "Ban Biên tập",
    description:
      "Bộ Quốc phòng chính thức công bố thông tin về dự án xây dựng nhà ở cho gia đình lực lượng vũ trang trong Quân đội tại phường Đông Sơn, tỉnh Thanh Hóa.",
    body: `Bộ Quốc phòng vừa chính thức công bố thông tin về dự án xây dựng nhà ở cho gia đình lực lượng vũ trang trong Quân đội tại phường Đông Sơn, tỉnh Thanh Hóa.

Dự án nhằm cải thiện điều kiện ở cho cán bộ, chiến sĩ và gia đình lực lượng vũ trang, thực hiện chủ trương của Đảng và Nhà nước về chăm lo đời sống vật chất, tinh thần cho quân nhân và thân nhân của họ.

Theo thông tin được công bố, dự án sẽ xây dựng các khu nhà ở đạt tiêu chuẩn, với đầy đủ các tiện ích như trường học, y tế, khu vui chơi giải trí, đáp ứng nhu cầu sinh hoạt của các gia đình quân nhân.

Bộ Quốc phòng cam kết thực hiện dự án đúng tiến độ, đảm bảo chất lượng, công khai, minh bạch trong quá trình triển khai, tạo điều kiện tốt nhất cho cán bộ, chiến sĩ yên tâm công tác, bảo vệ Tổ quốc.`,
    imageUrl: "/images/article-6.jpg",
  },
  {
    slug: "tau-ins-sagardhwani-hai-quan-an-do-tham-khanh-hoa",
    title: "Tàu Ins Sagardhwani của Hải quân Ấn Độ thăm Khánh Hòa",
    date: "04/05/2026",
    category: "Đối ngoại quốc phòng",
    categorySlug: "doi-ngoai-quoc-phong",
    author: "Ban Biên tập",
    description:
      "Tàu nghiên cứu hải dương học INS Sagardhwani của Hải quân Ấn Độ đã cập cảng Cam Ranh, Khánh Hòa, thực hiện chuyến thăm hữu nghị nhằm tăng cường quan hệ hợp tác quốc phòng Việt Nam - Ấn Độ.",
    body: `Tàu nghiên cứu hải dương học INS Sagardhwani của Hải quân Ấn Độ đã cập cảng Cam Ranh, tỉnh Khánh Hòa, thực hiện chuyến thăm hữu nghị từ ngày 3 đến 6/5/2026.

Chuyến thăm nằm trong khuôn khổ tăng cường hợp tác quốc phòng, hải quân giữa Việt Nam và Ấn Độ - hai quốc gia có quan hệ đối tác chiến lược toàn diện.

Trong thời gian cập cảng, sĩ quan, thủy thủ tàu INS Sagardhwani đã có các hoạt động giao lưu với lực lượng Hải quân Nhân dân Việt Nam; trao đổi kinh nghiệm về nghiên cứu hải dương học, bảo vệ môi trường biển.

Hai bên đã thảo luận về các cơ hội hợp tác trong lĩnh vực nghiên cứu hải dương học, chia sẻ thông tin khí tượng thủy văn biển và phối hợp bảo đảm an ninh, an toàn hàng hải trong khu vực.`,
    imageUrl: "/images/article-7.jpg",
  },
  {
    slug: "nghi-quyet-cat-giam-thu-tuc-hanh-chinh-quoc-phong",
    title: "Nghị quyết cắt giảm, phân cấp, đơn giản hóa thủ tục hành chính lĩnh vực quốc phòng",
    date: "03/05/2026",
    category: "Quốc phòng an ninh",
    categorySlug: "quoc-phong-an-ninh",
    author: "Ban Biên tập",
    description:
      "Chính phủ ban hành Nghị quyết về cắt giảm, phân cấp, đơn giản hóa thủ tục hành chính, điều kiện kinh doanh lĩnh vực quốc phòng, nội vụ, tài chính, xây dựng, ngoại giao, tư pháp, ngân hàng.",
    body: `Chính phủ vừa ban hành Nghị quyết về cắt giảm, phân cấp, đơn giản hóa thủ tục hành chính, điều kiện kinh doanh trong các lĩnh vực quốc phòng, nội vụ, tài chính, xây dựng, ngoại giao, tư pháp, ngân hàng.

Theo đó, trong lĩnh vực quốc phòng, nhiều thủ tục hành chính được cắt giảm, đơn giản hóa, nhằm tạo thuận lợi cho các tổ chức, cá nhân trong hoạt động liên quan đến quốc phòng.

Các thủ tục liên quan đến đăng ký, cấp phép hoạt động trong lĩnh vực quốc phòng được phân cấp cho địa phương, giúp rút ngắn thời gian xử lý và giảm chi phí tuân thủ.

Bộ Quốc phòng được giao nhiệm vụ chủ trì, phối hợp với các bộ, ngành liên quan triển khai thực hiện Nghị quyết, đảm bảo cải cách thực chất, hiệu quả, phục vụ tốt hơn nhu cầu của người dân và doanh nghiệp.`,
    imageUrl: "/images/article-8.jpg",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return ARTICLES.filter((a) => a.categorySlug === categorySlug);
}

export function getRecentArticles(count = 5): Article[] {
  return ARTICLES.slice(0, count);
}

/** Build a plain-text corpus for RAG retrieval */
export function buildCorpus(): string {
  return ARTICLES.map(
    (a) =>
      `TIÊU ĐỀ: ${a.title}\nNGÀY: ${a.date}\nCHUYÊN MỤC: ${a.category}\nTÁC GIẢ: ${a.author}\nNỘI DUNG:\n${a.body}`
  ).join("\n\n---\n\n");
}
