import { BASE_URL } from '@/lib/BASE_URL';
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET (req: NextRequest, res: NextResponse) {
  try {
    const userId = req.cookies.get('userId')

    if (!userId)
      return NextResponse.json({ error: 'Unauthenticated' }, { status: 403 })

    cookies().delete('token');
    
    const response = NextResponse.redirect(`${BASE_URL}/signin`)
    return response
  } catch (e) {
    console.log(`Error in LOGOUT req${e}`)
    return NextResponse.json(
      { error: `Error in LOGOUT req${e}` },
      { status: 500 }
    )
  }
}
