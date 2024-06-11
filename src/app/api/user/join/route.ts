import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.json();

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BE_URL}/auth/join`,
      formData,
    );

    if (response.status === 200) {
      return NextResponse.json(response.data, { status: 200 });
    }

    return NextResponse.json(
      { message: response.statusText },
      { status: response.status },
    );
  } catch (error) {
    console.warn('Error sending SMS:', error);
    return NextResponse.json(
      { message: 'Failed to send SMS', error },
      { status: 500 },
    );
  }
}
