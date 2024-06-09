import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';

import {
  setCredit,
  setCreditImage,
} from '@/shared/store/slices/getCreditSlice';

export const useFetchGeneral = (id: string, way: string) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useSearchParams();

  const handleGeneralRequest = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result as string; // Cast to string
      const fileFormat = file.type.split('/')[1];
      const fileName = file.name;

      try {
        const response = await axios.post('/api/ocr/general', {
          imageBase64: base64Image,
          fileFormat,
          fileName,
        });
        dispatch(setCreditImage(base64Image));

        dispatch(
          setCredit({
            storeName: response.data[5].inferText,
            price: response.data[6].inferText
              .replace(/[^\d-]/g, '')
              .split('-')[1],
            creditDate:
              response.data[20].inferText === '결제일시'
                ? `${response.data[21].inferText} ${response.data[22].inferText} ${response.data[23].inferText}`
                : `${response.data[20].inferText} ${response.data[21].inferText} ${response.data[22].inferText}`,
          }),
        );
        router.push(
          `/rest/${id}/customer/review?restNm=${params.get('restNm')}&way=${way}`,
        );
      } catch (error) {
        console.error('Error processing OCR', error);
      }
    };

    reader.readAsDataURL(file);
  };
  return handleGeneralRequest;
};
