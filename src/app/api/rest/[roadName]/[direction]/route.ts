import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const roadName = searchParams.get('roadName');
  const direction = searchParams.get('direction');

  if (!roadName || !direction) {
    return NextResponse.json(
      { message: 'Missing required query parameters' },
      { status: 400 },
    );
  }

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BE_URL}/rest/${roadName}/${direction}`,
    );

    if (response.status === 200) {
      return NextResponse.json(response.data, { status: 200 });
    }

    return NextResponse.json(
      { message: response.statusText },
      { status: response.status },
    );
  } catch (error) {
    console.warn('Error fetching data:', error);
    return NextResponse.json(
      { message: 'Failed to fetch data', error },
      { status: 500 },
    );
  }
}
