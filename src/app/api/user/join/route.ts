import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.json();

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BE_URL}/auth/join`,
      formData,
    );

    return NextResponse.json(
      { message: response.statusText },
      { status: response.status },
    );
  } catch (error) {
    console.warn('data POST error', error);
    return NextResponse.json(
      {
        message: 'data POST error',
        error,
      },
      { status: 500 },
    );
  }
}
