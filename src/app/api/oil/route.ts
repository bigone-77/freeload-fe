import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const restId = searchParams.get('restId');
  const direction = searchParams.get('direction');

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BE_URL}/oil/detail/${restId}/${direction}`,
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
