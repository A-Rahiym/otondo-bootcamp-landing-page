import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { name, email, phone, track } = body

    if (!name || !email || !phone || !track) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Here you would typically save to database or send an email
    // For now, we'll just log and return success
    console.log("Application received:", { name, email, phone, track })

    return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing application:", error)
    return NextResponse.json({ error: "Failed to process application" }, { status: 500 })
  }
}
