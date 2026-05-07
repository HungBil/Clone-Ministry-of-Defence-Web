import { NextRequest, NextResponse } from "next/server";

/**
 * Image proxy – fetches images from bqp.vn server-side (bypasses hotlink protection).
 * Usage: /api/image?url=<encoded-bqp.vn-url>
 */
export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return new NextResponse("Missing url param", { status: 400 });
  }

  // Only allow bqp.vn images for security
  if (!url.startsWith("http://bqp.vn/") && !url.startsWith("https://bqp.vn/")) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  try {
    const upstream = await fetch(url, {
      headers: {
        Referer: "https://bqp.vn/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      },
      // 8-second timeout
      signal: AbortSignal.timeout(8000),
    });

    if (!upstream.ok) {
      return new NextResponse("Upstream error", { status: 502 });
    }

    const contentType = upstream.headers.get("content-type") ?? "image/jpeg";
    const buffer = await upstream.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        // Cache for 1 hour in browser, 24h in CDN
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    });
  } catch {
    // Fallback: redirect to a gray placeholder
    return NextResponse.redirect(
      `https://placehold.co/400x280/003366/ffffff?text=BQP`
    );
  }
}
