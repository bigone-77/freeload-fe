import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const timeStamp = searchParams.get('timestamp');
  try {
    const response = await axios(
      `${process.env.NEXT_PUBLIC_BE_URL}/rest/all?timestamp=${timeStamp}`,
    );

    if (response.status === 200) {
      return NextResponse.json(response.data, { status: 200 });
    }

    return NextResponse.json(
      { message: response.statusText },
      { status: response.status },
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to send SMS', error },
      { status: 500 },
    );
  }
}
