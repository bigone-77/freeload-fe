'use client';

import { CldUploadWidget } from 'next-cloudinary';
import React from 'react';
import { CiCamera } from 'react-icons/ci';

interface IImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

export default function ImageUpload({ onChange, value }: IImageUploadProps) {
  const handleUpload = (result: any) => {
    // console.log('result', result);
    onChange(result.info.secure_url);
  };

  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  return (
    <section className="flex items-center gap-4 my-10">
      <img
        src={value}
        alt="profile"
        width={60}
        height={60}
        className="rounded-full"
      />
      <div>
        <div className="flex items-center gap-2">
          <CiCamera size={25} />
          <p className="text-text600 text-sm">프로필 사진 업로드</p>
        </div>
        <CldUploadWidget
          onUpload={handleUpload}
          uploadPreset={uploadPreset}
          options={{
            maxFiles: 1,
            sources: ['local'],
          }}
        >
          {({ open }) => (
            <div
              onClick={() => open()}
              className="text-center p-2 border rounded-lg text-text400 mt-3"
            >
              앨범선택...
            </div>
          )}
        </CldUploadWidget>
      </div>
    </section>
  );
}
