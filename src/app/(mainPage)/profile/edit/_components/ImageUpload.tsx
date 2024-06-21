'use client';

import React, { useRef } from 'react';
import { CiCamera } from 'react-icons/ci';

interface IImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

export default function ImageUpload({ onChange, value }: IImageUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append(
        'upload_preset',
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
      );

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        {
          method: 'POST',
          body: formData,
        },
      );

      const data = await response.json();
      onChange(data.secure_url);
    }
  };

  return (
    <section className="flex items-center gap-4 my-10">
      <img
        src={value}
        alt="profile"
        className="rounded-full w-[80px] h-[80px]"
      />
      <div>
        <div className="flex items-center gap-2">
          <CiCamera size={25} />
          <p className="text-text600 text-sm">프로필 사진 업로드</p>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <div
          onClick={() => fileInputRef.current?.click()}
          className="text-center p-2 border rounded-lg text-text400 mt-3 hover:opacity-80 transition-all cursor-pointer"
        >
          앨범선택...
        </div>
      </div>
    </section>
  );
}
