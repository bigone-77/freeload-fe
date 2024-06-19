'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Onboarding() {
  const OnboardingImage = [
    {
      id: 1,
      icon: 'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718788714/first-icon.svg',
      blue: '반경 설정으로',
      point: 5,
      black: '내 주변 휴게소 검색',
      image:
        'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718788712/first-phone.png',
    },
    {
      id: 2,
      icon: 'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718788713/second-icon.svg',
      blue: '저장, 원하는',
      point: 2,
      black: '휴게소만 골라보기',
      image:
        'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718788713/second-phone.png',
    },
    {
      id: 3,
      icon: 'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718788713/third-icon.svg',
      blue: '선택, 사용예정인 ',
      point: 2,
      black: '고속도로 위 휴게소 검색',
      image:
        'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718788712/third-phone.png',
    },
    {
      id: 4,
      icon: 'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718788714/fourth-icon.svg',
      blue: '도착지 검색',
      black: '만나볼 휴게소, 주유소 확인',
      image:
        'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718788712/fourth-phone.png',
    },
    {
      id: 5,
      icon: 'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718788713/fifth-icon.svg',
      blue: '영수증, 구매내역 인증',
      black: '해당 휴게소 평가하기',
      image:
        'https://res.cloudinary.com/dbcvqhjmf/image/upload/v1718788712/fifth-phone.png',
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      loop
      pagination={{ clickable: true }}
    >
      {OnboardingImage.map((d) => (
        <SwiperSlide key={d.id} className="overflow-hidden">
          <div className="flex flex-col items-center justify-center gap-4 mt-10 text-center">
            <img src={d.icon} alt="icon" className="mb-8" />
            <section className="flex flex-col items-center font-semibold">
              <span className="flex items-center">
                <p className="text-primary">{d.blue.slice(0, d.point)}</p>
                {d.point && <p>{d.blue.slice(d.point, d.blue.length)}</p>}
              </span>
              <p>{d.black}</p>
            </section>
            <img src={d.image} alt="img" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
