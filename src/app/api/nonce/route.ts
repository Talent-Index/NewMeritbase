
import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";

export async function GET(req: NextRequest) {
  try {
    const nonce = randomBytes(32).toString("hex");
    // In a real app, you would store this nonce in your database
    // associated with a user or session, with an expiry time.
    return NextResponse.json({ nonce });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate nonce" }, { status: 500 });
  }
}
