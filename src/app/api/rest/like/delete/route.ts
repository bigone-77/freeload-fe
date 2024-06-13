import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const restId = searchParams.get('restId');

  const formData = await req.json();

  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BE_URL}/rest/${restId}/like`,
      { data: formData }, // data 속성에 formData를 포함시킴
    );

    return NextResponse.json(
      { message: response.statusText },
      { status: response.status },
    );
  } catch (error) {
    console.warn('data DELETE error', error);
    return NextResponse.json(
      {
        message: 'data DELETE error',
        error,
      },
      { status: 500 },
    );
  }
}
