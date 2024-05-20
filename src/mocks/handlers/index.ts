import { delay, http, HttpResponse } from 'msw';
import { oilData, restData, roadData } from './ContentType';

export const handlers = [
  http.get('/rest/:roadName/:direction', ({ params }) => {
    const { roadName, direction } = params;
    if (roadName && direction) {
      return HttpResponse.json(restData);
    }
    return HttpResponse.error();
  }),

  http.get('/rest', async ({ request }) => {
    const url = new URL(request.url);

    const restId = url.searchParams.get('restId');

    if (!restId) {
      return new HttpResponse(null, { status: 404 });
    }

    await delay(2000);
    return HttpResponse.json({
      rest: restData.filter((rest) => rest.restId === restId),
      oil: oilData.filter((oil) => oil.oilId === restId),
    });
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
