export type Road = {
  routeCd: string;
  routeNm: string;
};

export type RoadResponse = {
  error: any;
  message: boolean;
  data: Road[];
};
