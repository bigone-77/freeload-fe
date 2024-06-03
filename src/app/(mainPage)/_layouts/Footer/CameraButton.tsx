'use client';

import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';

export default function CameraButton() {
  const [ocrResult, setOcrResult] = useState<any>(null);

  const handleOcrRequest = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;
      const fileFormat = file.type.split('/')[1];
      const fileName = file.name;

      try {
        const response = await axios.post('/api/ocr', {
          imageBase64: base64Image,
          fileFormat,
          fileName,
        });

        setOcrResult(response.data);
      } catch (error) {
        console.error('Error processing OCR', error);
      }
    };

    reader.readAsDataURL(file);
    setOcrResult(null); // Reset previous result
  };

  return (
    <div className="rounded-full bg-primary flex items-center justify-center -translate-y-6 w-16 h-16">
      <label htmlFor="file" style={{ cursor: 'pointer' }}>
        <input
          type="file"
          id="file"
          accept="image/*"
          capture="environment"
          onChange={handleOcrRequest}
          style={{ display: 'none' }}
        />
        <Image
          src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1715220807/scan.svg"
          alt="qu-icon"
          width={25}
          height={24}
          priority
        />
      </label>
      {ocrResult && <pre>{JSON.stringify(ocrResult, null, 2)}</pre>}
    </div>
  );
}
