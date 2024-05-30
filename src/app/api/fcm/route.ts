import { NextRequest, NextResponse } from 'next/server';

import { sendFCMNotification } from '@/hooks/push/sendFCMNotification';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { message } = body;

    const result = await sendFCMNotification(message);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
