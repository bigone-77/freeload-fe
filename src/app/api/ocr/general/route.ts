import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const GENERAL_OCR_SECRET = process.env.NEXT_PUBLIC_GENERAL_OCR_SECRET_KEY;
  const GENERAL_OCR_INVOKE_URL = process.env.NEXT_PUBLIC_GENERAL_INVOKE_URL;

  const { imageBase64, fileFormat, fileName } = await req.json();

  const message = {
    requestId: 'credit', // Identifier for the request
    version: 'V1', // API version
    timestamp: Date.now(), // Updated timestamp to current time
    images: [
      {
        format: fileFormat, // File format, e.g., jpeg, png
        name: fileName, // File name
        data: imageBase64.split(',')[1], // Base64 data part
      },
    ],
  };
  try {
    const response = await axios.post(`${GENERAL_OCR_INVOKE_URL}`, message, {
      headers: {
        'X-OCR-SECRET': GENERAL_OCR_SECRET,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return NextResponse.json(response.data.images[0].fields, {
        status: 200,
      });
    }
    return NextResponse.json(
      { message: response.data },
      { status: response.status },
    );
  } catch (error) {
    console.warn('credit ocr error', error);
    return NextResponse.json(
      {
        message: 'OCR processing failed',
        error,
      },
      { status: 500 },
    );
  }
}
