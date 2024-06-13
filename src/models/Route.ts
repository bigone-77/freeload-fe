export type Route = {
  route_id?: number;
  email?: string;
  startAddr: string;
  startLatLng: string;
  endAddr: string;
  endLatLng: string;
};

export type RouteResponse = {
  error: any;
  message: boolean;
  status: any;
  data: Route[];
};
