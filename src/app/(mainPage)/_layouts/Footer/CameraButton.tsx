'use client';

import Image from 'next/image';

export default function CameraButton() {
  const fileUpload = (event: any) => {
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);
  };
  return (
    <div className="rounded-full bg-primary flex items-center justify-center -translate-y-6 w-16 h-16">
      <label htmlFor="file" style={{ cursor: 'pointer' }}>
        <input
          type="file"
          id="file"
          accept="image/*"
          capture="environment"
          onChange={fileUpload}
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
    </div>
  );
}
