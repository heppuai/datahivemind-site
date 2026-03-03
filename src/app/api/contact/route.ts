import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send notification email via SMTP
    // For now, we'll store submissions and rely on the mailto fallback
    // TODO: Add SMTP sending via API route once we have env vars configured
    
    console.log("New inquiry:", { name, email, message, timestamp: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
