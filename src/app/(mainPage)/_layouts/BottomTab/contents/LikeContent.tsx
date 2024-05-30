import { requestPermission } from '@/hooks/push/requestPermission';

export default function LikeContent() {
  return (
    <div>
      찜컨텐츠
      <button type="button" onClick={requestPermission}>
        푸시 알림 테스트 버튼
      </button>
    </div>
  );
}
