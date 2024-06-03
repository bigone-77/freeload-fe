export type Rest = {
  restId: number;
  restName: string;
  restAddr: string;
  gudClssCd: string;
  routeNm: string;
  hdqrCd: string;
  routeCd: string;
  rprsTelNo: string;
  wifi: string;
  satisfaction: string;
  electric_car: string;
  nursing_room: string;
  pharmacy: string;
  pet: string;
  latitude: string;
  longitude: string;
  braile_block: string;
};

export type RestResponse = {
  error: any;
  message: boolean;
  data: Rest[];
};
