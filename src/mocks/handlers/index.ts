import { http, HttpResponse } from 'msw';
import { oilData, restData, roadData } from './ContentType';

export const handlers = [
  http.get('/rest/:roadName/:direction', ({ params }) => {
    const { roadName, direction } = params;
    if (roadName && direction) {
      return HttpResponse.json(restData);
    }
    return HttpResponse.error();
  }),

  http.get('/oil/:roadName/:direction', ({ params }) => {
    const { roadName, direction } = params;
    if (roadName && direction) {
      return HttpResponse.json(oilData);
    }
    return HttpResponse.error();
  }),

  http.get('/road', () => HttpResponse.json(roadData)),
];