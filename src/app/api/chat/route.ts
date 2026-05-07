import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { buildCorpus } from "@/lib/articles";

const SYSTEM_PROMPT = `Bạn là trợ lý AI của Cổng thông tin điện tử Bộ Quốc phòng Việt Nam (demo học thuật).

NHIỆM VỤ:
- Chỉ trả lời dựa trên DỮ LIỆU BÊN DƯỚI (crawl từ bqp.vn).
- Nếu câu hỏi nằm ngoài phạm vi dữ liệu, hãy nói rõ: "Tôi không có thông tin về vấn đề này trong cơ sở dữ liệu hiện tại."
- Trả lời bằng tiếng Việt, rõ ràng, súc tích.
- Không bịa đặt thông tin, không suy đoán ngoài dữ liệu.
- Cuối câu trả lời, hãy gợi ý người dùng xem bài viết liên quan nếu có.

GIỚI HẠN:
- Không đưa ra tư vấn pháp lý hay quân sự chính thức.
- Không bình luận chính trị hay ngoại giao nhạy cảm.
- Đây là sản phẩm demo học thuật, không phải nguồn thông tin chính thức.

CƠ SỞ DỮ LIỆU (dữ liệu crawl từ bqp.vn):
---
${buildCorpus()}
---`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY chưa được cấu hình. Vui lòng thêm vào file .env.local" },
        { status: 500 }
      );
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
      max_tokens: 800,
      temperature: 0.3,
    });

    const reply = response.choices[0]?.message?.content ?? "Không có phản hồi.";
    return NextResponse.json({ reply });
  } catch (err: unknown) {
    console.error("[/api/chat] Error:", err);
    const message = err instanceof Error ? err.message : "Lỗi không xác định";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
