import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const OCR_SECRET = process.env.NEXT_PUBLIC_OCR_SECRET_KEY;
  const OCR_INVOKE_URL = process.env.NEXT_PUBLIC_OCR_INVOKE_URL;

  const { imageBase64, fileFormat, fileName } = await req.json();

  const message = {
    requestId: 'receipt', // Identifier for the request
    resultType: 'string', // Expecting a string result type
    version: 'V2', // API version
    timestamp: 0,
    images: [
      {
        format: fileFormat, // File format, e.g., jpeg, png
        name: fileName, // File name
        data: imageBase64.split(',')[1], // Base64 data part
      },
    ],
  };

  try {
    const response = await axios.post(`${OCR_INVOKE_URL}`, message, {
      headers: {
        'X-OCR-SECRET': OCR_SECRET,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return NextResponse.json(response.data.images[0].receipt.result, {
        status: 200,
      });
    }
    return NextResponse.json(
      { message: response.statusText },
      { status: response.status },
    );
  } catch (error) {
    console.warn('requestWithBase64 error', error);
    return NextResponse.json(
      {
        message: 'OCR processing failed',
        error,
      },
      { status: 500 },
    );
  }
}
