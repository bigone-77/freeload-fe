import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';

import {
  setReceipt,
  setReceiptImage,
} from '@/shared/store/slices/getReceiptSlice';
import { toast } from 'react-toastify';

export const useFetchOcr = (
  id: string,
  way: string,
  setLoading: (loading: boolean) => void,
) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const params = useSearchParams();

  const handleOcrRequest = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;
      const fileFormat = file.type.split('/')[1];
      const fileName = file.name;

      setLoading(true);
      try {
        const response = await axios.post('/api/ocr', {
          imageBase64: base64Image,
          fileFormat,
          fileName,
        });
        dispatch(setReceiptImage(base64Image));

        dispatch(
          setReceipt({
            storeInfo: response.data.storeInfo,
            paymentInfo: response.data.paymentInfo,
            subResults: response.data.subResults,
          }),
        );
        router.push(
          `/rest/${id}/customer/review?restNm=${params.get('restNm')}&way=${way}`,
        );
      } catch (error) {
        toast.error('영수증 인식에 실패했어요.');
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(file);
  };

  return handleOcrRequest;
};
