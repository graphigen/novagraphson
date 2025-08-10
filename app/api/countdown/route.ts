import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // This would typically come from a database or configuration
    // For now, we'll set it to 15 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 15)
    
    return NextResponse.json({
      targetDate: targetDate.toISOString(),
      message: 'Countdown target date retrieved successfully'
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to retrieve countdown target date' },
      { status: 500 }
    )
  }
}
