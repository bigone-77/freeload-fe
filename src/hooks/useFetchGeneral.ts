/* eslint-disable prefer-destructuring */
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

        let creditDate;

        for (let i = 0; i < response.data.length; i += 1) {
          if (response.data[i].inferText === '결제일시') {
            creditDate = `${response.data[i + 1].inferText} ${response.data[i + 2].inferText} ${response.data[i + 3].inferText}`;
            break;
          }
        }
        let storeName;
        let price;

        const [, , , , data4, data5, data6] = response.data;

        if (data6.inferText.includes('-')) {
          storeName = data5.inferText;
          price = data6.inferText.replace(/[^\d-]/g, '').split('-')[1];
        } else if (data5.inferText.includes('-')) {
          storeName = data4.inferText;
          price = data5.inferText.replace(/[^\d-]/g, '').split('-')[1];
        }

        dispatch(
          setCredit({
            storeName,
            price,
            creditDate,
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
