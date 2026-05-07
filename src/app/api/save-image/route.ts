import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Development-only API route to save crawled images to public/images/
// Remove or disable in production
export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 403 });
  }

  try {
    const { filename, data } = await req.json();

    if (!filename || !data) {
      return NextResponse.json({ error: 'Missing filename or data' }, { status: 400 });
    }

    // Sanitize filename
    const safe = path.basename(filename).replace(/[^a-z0-9._-]/gi, '_');
    const outDir = path.join(process.cwd(), 'public', 'images');

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    const dest = path.join(outDir, safe);
    const buf = Buffer.from(data, 'base64');
    fs.writeFileSync(dest, buf);

    return NextResponse.json({ ok: true, file: safe, size: buf.length });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
