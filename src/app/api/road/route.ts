import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await axios(`${process.env.NEXT_PUBLIC_BE_URL}/road`);

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
