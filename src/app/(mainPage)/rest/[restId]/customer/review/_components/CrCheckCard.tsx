import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import PrimaryButton from '@/Common/PrimaryButton';
import { RootState } from '@/shared/store';
import { useMutation } from '@tanstack/react-query';
import { postReview } from '@/lib/user/postReview';

interface ICrCheckCardProps {
  restId: string;
  way: string;
}

export default function CrCheckCard({ restId, way }: ICrCheckCardProps) {
  const currentUser = useSession();
  const params = useSearchParams();
  const restNm = params.get('restNm');
  const creditData = useSelector((state: RootState) => state.credit);
  const [content, setContent] = useState('');
  const [reviewFile, setReviewFile] = useState<File | null>(null);
  const [reviewImage, setReviewImage] = useState<string | ArrayBuffer | null>(
    '',
  );
  const router = useRouter();

  const createFormData = () => {
    const formData = new FormData();

    const dto = {
      email: currentUser.data?.user?.email,
      profile_image: currentUser.data?.user?.image,
      svarCd: restId,
      storeName: creditData.storeName,
      visitedDate: creditData.creditDate,
      price: creditData.price,
      content,
      way,
    };
    formData.append('dto', JSON.stringify(dto));
    formData.append('file', reviewFile || new Blob());

    return formData;
  };

  const mutation = useMutation({
    mutationFn: postReview,
    onSuccess: () => {
      router.push(`/rest/${restId}/customer?restNm=${restNm}`);
    },
    onError: (error) => {
      console.error('Mutation failed', error);
    },
  });

  const selectedImageHandler = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setReviewFile(file);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;
      setReviewImage(base64Image);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center justify-center pb-28">
      <section className="flex items-start gap-4 my-4 ">
        <Image
          src={creditData.creditImage!}
          alt="receipt"
          width={70}
          height={80}
          priority
        />
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold">
            {restNm}, {creditData.storeName}
          </h2>
          <span className="inline-block">
            <h2 className="text-xl font-semibold mb-2">
              {creditData.creditDate}
            </h2>
            <h2>에 방문하셨군요!</h2>
          </span>
        </div>
      </section>

      <section className="gap-2 border rounded-md bg-white shadow-lg p-4 w-full mt-6">
        <div className="flex items-center justify-between">
          <h3>총금액</h3>
          <h3>{creditData.price}원</h3>
        </div>
      </section>

      <section className="mt-10 flex flex-col gap-3 w-full">
        <span className="inline-block">
          <p className="text-lg font-semibold mb-2">
            {restNm}, {creditData.storeName}
          </p>
          <p>은 어떠셨나요?</p>
        </span>
        <label htmlFor="file" style={{ cursor: 'pointer' }}>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={selectedImageHandler}
            style={{ display: 'none' }}
          />
          <img
            src={
              typeof reviewImage === 'string' && reviewImage
                ? reviewImage
                : 'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718635387/vmheihali7knbqxb1xxh.png'
            }
            alt="upload"
            className="w-20 h-20 rounded-md"
          />
        </label>
        <textarea
          className="p-4 rounded-md outline-none"
          placeholder="여기에 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </section>

      <PrimaryButton
        onClick={() => mutation.mutate(createFormData())}
        classProps="mt-6"
        short
      >
        리뷰 남기기
      </PrimaryButton>
    </div>
  );
}
