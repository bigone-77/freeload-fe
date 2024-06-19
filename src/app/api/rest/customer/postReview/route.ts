import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // FormData를 요청에서 추출합니다.
    const formData = await req.formData();

    // 'dto'와 'file' 필드를 추출합니다.
    const dtoString = formData.get('dto');
    const file = formData.get('file');

    // 'dto'를 JSON 문자열에서 객체로 변환합니다.
    let dto;
    try {
      dto = JSON.parse(dtoString as string);
    } catch (error) {
      return NextResponse.json(
        {
          message: 'Failed to parse dto',
          error,
        },
        { status: 400 },
      );
    }

    // 새로운 FormData 객체를 생성합니다.
    const formDataToSend = new FormData();

    if (!file) {
      formDataToSend.append('file', new Blob(), 'empty-file');
    } else {
      formDataToSend.append('file', file as File);
    }

    // JSON 데이터를 Blob으로 변환하여 추가합니다.
    const dtoBlob = new Blob([JSON.stringify(dto)], {
      type: 'application/json',
    });
    formDataToSend.append('dto', dtoBlob);
    // axios를 사용하여 백엔드 API로 POST 요청을 보냅니다.
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BE_URL}/review`,
      formDataToSend,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    return NextResponse.json(
      { message: response.statusText },
      { status: response.status },
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'data POST error',
        error,
      },
      { status: 500 },
    );
  }
}
