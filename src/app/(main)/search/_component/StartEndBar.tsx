import Image from 'next/image';

export default function StartEndBar() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714471493/start-area.svg"
        alt="start-svg"
        width={12}
        height={12}
      />
      <Image
        src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714471493/start-end-link.svg"
        alt="link-svg"
        width={1}
        height={63}
      />
      <Image
        src="https://res.cloudinary.com/dbcvqhjmf/image/upload/v1714471493/end-area.svg"
        alt="link-svg"
        width={14}
        height={18}
      />
    </div>
  );
}
