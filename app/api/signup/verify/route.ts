import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export async function POST (req: NextRequest, res: NextResponse) {

  try {

    const { otp,email } = await req.json();

    if (!otp)
      return NextResponse.json({ error: 'otp is required' }, { status: 400 })

    const isOtpCorrect = await prisma.user.findFirst({
      where: {
        otp,
        email
      }
    })

    console.log(isOtpCorrect)

    if (!isOtpCorrect)
      return NextResponse.json({ error: 'Invalid Otp' }, { status: 400 })

    const updatedUser = await prisma.user.update({
      where: {
        otp,
        email,
        id:isOtpCorrect.id
      },
      data: {
        isVerified: true
      }
    })

    const token = jwt.sign(
      {
        data: email
      },
      process.env.JWT_SECRET as string
    )

    const response = NextResponse.json({ updatedUser }, { status: 200 })

    response.cookies.set('token', token, {
      httpOnly: true
    })

    return response
  } catch (e) {
    console.log(`Error in Veriy POST req ${e}`)
    return NextResponse.json(
      { error: `Error in Veriy POST req ${e}` },
      { status: 500 }
    )
  }
}
