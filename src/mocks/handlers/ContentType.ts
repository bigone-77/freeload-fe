import { Food } from '@/models/Food';
import { OilStation } from '@/models/OilStation';
import { Rest } from '@/models/Rest';

export const restData: Rest[] = [
  {
    restId: '1',
    restName: '정읍휴게소(순천 방향)',
    restAddr: '충북 충주시 중앙탑면 중부내륙고속도로 230-1',
    restTelNum: '02-3296-0316',
    restGrade: 1,
    wifi: true,
    repair: false,
    electronic: true,
    shelter: true,
    nurse: false,
    pharmacy: true,
    pet: true,
    disabled: true,
  },
  {
    restId: '2',
    restName: '백양사휴게소(순천 방향)',
    restAddr: '충북 충주시 중앙탑면 중부내륙고속도로 230-1',
    restTelNum: '02-3296-0316',
    restGrade: 1,
    wifi: false,
    repair: true,
    electronic: true,
    shelter: true,
    nurse: true,
    pharmacy: true,
    pet: true,
    disabled: false,
  },
  {
    restId: '3',
    restName: '장성휴게소(순천 방향)',
    restAddr: '서울시 노원구 노원로 18길 19',
    restTelNum: '02-3296-0316',
    restGrade: 0,
    wifi: true,
    repair: true,
    electronic: true,
    shelter: false,
    nurse: false,
    pharmacy: false,
    pet: false,
    disabled: true,
  },
  {
    restId: '4',
    restName: '천안휴게소(순천 방향)',
    restAddr: '충북 충주시 중앙탑면 중부내륙고속도로 230-1',
    restTelNum: '02-3296-0316',
    restGrade: 1,
    wifi: true,
    repair: true,
    electronic: true,
    shelter: true,
    nurse: true,
    pharmacy: true,
    pet: true,
    disabled: true,
  },
  {
    restId: '5',
    restName: '함평휴게소(순천 방향)',
    restAddr: '충북 충주시 중앙탑면 중부내륙고속도로 230-1',
    restTelNum: '02-3296-0316',
    restGrade: 1,
    wifi: true,
    repair: true,
    electronic: true,
    shelter: true,
    nurse: true,
    pharmacy: true,
    pet: true,
    disabled: true,
  },
];

export const roadData = [
  {
    roadId: 1,
    roadName: '중부고속도로',
  },
  {
    roadId: 2,
    roadName: '영동고속도로',
  },
  {
    roadId: 3,
    roadName: '동해고속도로',
  },
  {
    roadId: 4,
    roadName: '호남고속도로',
  },
  {
    roadId: 5,
    roadName: '서천공주고속도로',
  },
  {
    roadId: 6,
    roadName: '중부내륙고속도로',
  },
  {
    roadId: 7,
    roadName: '대전남부고속도로',
  },
  {
    roadId: 8,
    roadName: '경인고속도로',
  },
  {
    roadId: 9,
    roadName: '수도권제2순환고속도로',
  },
  {
    roadId: 10,
    roadName: '서해안고속도로',
  },
];

export const oilData: OilStation[] = [
  {
    oilId: '1',
    oilName: '옥산(부산)주유소',
    oilCompany: 'AD',
    diselPrice: 1508,
    gasolinePrice: 1665,
    lpgPrice: 1085,
    telNum: '043-269-0843',
    electric: true,
    hydrogen: true,
  },
  {
    oilId: '2',
    oilName: '추풍령(부산)주유소',
    oilCompany: 'SK',
    diselPrice: 1730,
    gasolinePrice: 1265,
    lpgPrice: 1985,
    telNum: '043-321-2133',
    electric: false,
    hydrogen: true,
  },
  {
    oilId: '3',
    oilName: '곡성(순천)주유소',
    oilCompany: 'AD',
    diselPrice: 1328,
    gasolinePrice: 1461,
    telNum: '032-569-1143',
    electric: true,
    hydrogen: true,
  },
  {
    oilId: '4',
    oilName: '옥산(부산)주유소',
    oilCompany: 'AD',
    diselPrice: 1508,
    gasolinePrice: 1665,
    lpgPrice: 1085,
    telNum: '043-269-0843',
    electric: false,
    hydrogen: true,
  },
  {
    oilId: '5',
    oilName: '여주(인천)주유소',
    oilCompany: 'SK',
    diselPrice: 1302,
    gasolinePrice: 1672,
    telNum: '032-859-2039',
    electric: false,
    hydrogen: false,
  },
  {
    oilId: '6',
    oilName: '옥산(부산)주유소',
    oilCompany: 'AD',
    diselPrice: 1508,
    gasolinePrice: 1665,
    lpgPrice: 1085,
    telNum: '043-269-0843',
    electric: true,
    hydrogen: true,
  },
];

export const foodData: Food[] = [
  {
    foodId: 1,
    bestFood: 'N',
    foodCost: 7000,
    foodName: '농심어묵우동',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'Y',
    seasonMenu: 's',
  },
  {
    foodId: 2,
    bestFood: 'N',
    foodCost: 6000,
    foodName: '농심유부우동',
    updateDate: '2024.5.7',
    premium: 'Y',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 3,
    bestFood: 'N',
    foodCost: 9000,
    foodName: '순두부찌개',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 4,
    bestFood: 'N',
    foodCost: 3500,
    foodName: '호도과자',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 5,
    bestFood: 'N',
    foodCost: 7000,
    foodName: '맥반석오징어구이',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 6,
    bestFood: 'N',
    foodCost: 8000,
    foodName: '옛날자장면',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 7,
    bestFood: 'N',
    foodCost: 4000,
    foodName: '(실속)EX라면',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: 's',
  },
  {
    foodId: 8,
    bestFood: 'N',
    foodCost: 9500,
    foodName: '직화 제육 덮밥',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 9,
    bestFood: 'N',
    foodCost: 10000,
    foodName: '교동짬뽕',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 10,
    bestFood: 'N',
    foodCost: 10000,
    foodName: '새우볶음밥',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 11,
    bestFood: 'N',
    foodCost: 2800,
    foodName: '소미미단팥빵',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 12,
    bestFood: 'N',
    foodCost: 4500,
    foodName: '삼진어묵',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 13,
    bestFood: 'N',
    foodCost: 10500,
    foodName: '옛날돈까스',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 14,
    bestFood: 'Y',
    foodCost: 8500,
    foodName: '말죽거리소고기국밥',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'Y',
    seasonMenu: '4',
  },
  {
    foodId: 15,
    bestFood: 'N',
    foodCost: 10000,
    foodName: '맛남愛함박',
    updateDate: '2024.5.7',
    premium: 'Y',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 16,
    bestFood: 'N',
    foodCost: 7000,
    foodName: '바지락미역국',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'Y',
    seasonMenu: 's',
  },
  {
    foodId: 17,
    bestFood: 'N',
    foodCost: 12000,
    foodName: '말죽거리한우곰탕',
    updateDate: '2024.5.7',
    premium: 'Y',
    recommend: 'N',
    seasonMenu: 's',
  },
  {
    foodId: 18,
    bestFood: 'N',
    foodCost: 11000,
    foodName: '매운돈까스',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 19,
    bestFood: 'N',
    foodCost: 7000,
    foodName: '잔치국수',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 20,
    bestFood: 'N',
    foodCost: 10000,
    foodName: '돈비국수',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 21,
    bestFood: 'N',
    foodCost: 8000,
    foodName: '국물비빔국수',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 22,
    bestFood: 'N',
    foodCost: 9000,
    foodName: '돈잔국수',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 23,
    bestFood: 'N',
    foodCost: 10000,
    foodName: '돈모밀국수',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 24,
    bestFood: 'N',
    foodCost: 8000,
    foodName: '냉모밀',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: 's',
  },
  {
    foodId: 25,
    bestFood: 'N',
    foodCost: 12000,
    foodName: '소고기짬뽕',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 26,
    bestFood: 'N',
    foodCost: 9000,
    foodName: '명인돼지고기김치찌개',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'Y',
    seasonMenu: '4',
  },
  {
    foodId: 27,
    bestFood: 'N',
    foodCost: 9000,
    foodName: '돌솥비빔밥',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 28,
    bestFood: 'N',
    foodCost: 6500,
    foodName: '농심김치우동',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: 'w',
  },
  {
    foodId: 29,
    bestFood: 'N',
    foodCost: 10000,
    foodName: '꼬막비빔밥',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 30,
    bestFood: 'N',
    foodCost: 6500,
    foodName: '해물통통라면',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 31,
    bestFood: 'N',
    foodCost: 6000,
    foodName: '대파송송라면',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: 'w',
  },
  {
    foodId: 32,
    bestFood: 'N',
    foodCost: 5000,
    foodName: '토스타 토스트',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 33,
    bestFood: 'N',
    foodCost: 6800,
    foodName: '시그니쳐 토스트',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 34,
    bestFood: 'N',
    foodCost: 8000,
    foodName: '수제 버거',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 35,
    bestFood: 'N',
    foodCost: 5500,
    foodName: '옛날떡볶이',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: 'w',
  },
  {
    foodId: 36,
    bestFood: 'N',
    foodCost: 6500,
    foodName: '시래기떡볶이',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 37,
    bestFood: 'N',
    foodCost: 5500,
    foodName: '찹쌀순대',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 38,
    bestFood: 'N',
    foodCost: 4000,
    foodName: '야채뚱김밥2줄',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 39,
    bestFood: 'N',
    foodCost: 5000,
    foodName: '참치땡초김밥2줄',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 40,
    bestFood: 'N',
    foodCost: 4000,
    foodName: '테이크아웃 제육컵밥',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 41,
    bestFood: 'N',
    foodCost: 6500,
    foodName: '농심자장면',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: 'w',
  },
  {
    foodId: 42,
    bestFood: 'N',
    foodCost: 13500,
    foodName: '치즈돈가스',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 43,
    bestFood: 'N',
    foodCost: 6500,
    foodName: '순대강정',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 44,
    bestFood: 'N',
    foodCost: 10000,
    foodName: '떡볶이세트',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 45,
    bestFood: 'N',
    foodCost: 5000,
    foodName: '소세지치즈2줄김밥',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: 'w',
  },
  {
    foodId: 46,
    bestFood: 'N',
    foodCost: 4500,
    foodName: '수제왕김말이튀김',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 47,
    bestFood: 'N',
    foodCost: 4500,
    foodName: '맥반석쥐포',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 48,
    bestFood: 'N',
    foodCost: 5000,
    foodName: '매직핫도그',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 49,
    bestFood: 'N',
    foodCost: 4500,
    foodName: '소떡소떡(L)',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 50,
    bestFood: 'N',
    foodCost: 3500,
    foodName: '(알뜰)통감자튀김구이',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 51,
    bestFood: 'N',
    foodCost: 3500,
    foodName: '(알뜰)바삭어포',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 52,
    bestFood: 'N',
    foodCost: 3500,
    foodName: '(알뜰)옛날핫도그',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 53,
    bestFood: 'N',
    foodCost: 3500,
    foodName: '(알뜰)케네디소세지',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 54,
    bestFood: 'N',
    foodCost: 3500,
    foodName: '꼬치어묵2개',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 55,
    bestFood: 'N',
    foodCost: 1500,
    foodName: '못난이꽈배기',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 56,
    bestFood: 'N',
    foodCost: 2000,
    foodName: '유자도넛',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 57,
    bestFood: 'N',
    foodCost: 2000,
    foodName: '팥도넛',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 58,
    bestFood: 'N',
    foodCost: 2800,
    foodName: '아기궁뎅이',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 59,
    bestFood: 'N',
    foodCost: 2800,
    foodName: '생크림단팥빵',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
  {
    foodId: 60,
    bestFood: 'N',
    foodCost: 2800,
    foodName: '단팥소보로빵',
    updateDate: '2024.5.7',
    premium: 'N',
    recommend: 'N',
    seasonMenu: '4',
  },
];

export function getFoodHandler(sorted: string) {
  if (sorted === 'BEST') {
    return foodData.filter((food) => food.bestFood === 'Y');
  }
  if (sorted === 'RECOMMEND') {
    return foodData.filter((food) => food.recommend === 'Y');
  }
  if (sorted === 'SEASON') {
    return foodData.filter((food) => food.seasonMenu !== '4');
  }
  if (sorted === 'PREMIUM') {
    return foodData.filter((food) => food.premium === 'Y');
  }
  return foodData;
}
