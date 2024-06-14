import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const email = searchParams.get('email');

  try {
    const response = await axios.request({
      url: `${process.env.NEXT_PUBLIC_BE_URL}/review/all`,
      method: 'GET',
      data: { email }, // GET 요청에 본문 데이터 포함
      headers: {
        'Content-Type': 'application/json', // Content-Type 헤더 추가
      },
      transformRequest: [
        (data, headers) => {
          headers['Content-Type'] = 'application/json';
          return JSON.stringify(data);
        },
      ],
    });

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
