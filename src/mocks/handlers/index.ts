import { delay, http, HttpResponse } from 'msw';
import {
  foodData,
  getFilteredRest,
  getFoodHandler,
  oilData,
  restData,
  roadData,
  sortedOilFilter,
} from './ContentType';

export const handlers = [
  http.get('/rest/food/:restId', async ({ params, request }) => {
    const { restId } = params;

    const url = new URL(request.url);

    const sorted = url.searchParams.get('sort'); // 어떤걸 필터링할건지 ?
    const cursor = parseInt(url.searchParams.get('cursor') as string, 10) || 0; // 인피니티 스크롤 구현

    if (restId) {
      if (sorted) {
        return HttpResponse.json(
          getFoodHandler(sorted).slice(cursor * 6, (cursor + 1) * 6),
        );
      }
      return HttpResponse.json(foodData.slice(cursor * 6, (cursor + 1) * 6));
    }
    return HttpResponse.error();
  }),

  http.get('/rest/:roadName/:direction', ({ params, request }) => {
    const { roadName, direction } = params;
    const url = new URL(request.url);

    const sorted = url.searchParams.get('sort');
    if (roadName && direction) {
      if (sorted) {
        return HttpResponse.json(getFilteredRest(sorted));
      }
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

  http.get('/oil/:roadName/:direction', ({ params, request }) => {
    const { roadName, direction } = params;
    const url = new URL(request.url);

    const oilName = url.searchParams.get('oil');
    const orderStandard = url.searchParams.get('order');
    const elec = url.searchParams.get('elec');
    const hydr = url.searchParams.get('hydr');

    if (roadName && direction) {
      let filteredOilData = oilData;
      if (elec === 'true') {
        filteredOilData = filteredOilData.filter((oil) => oil.electric);
      }
      if (hydr === 'true') {
        filteredOilData = filteredOilData.filter((oil) => oil.hydrogen);
      }
      if (oilName && orderStandard) {
        return HttpResponse.json(
          sortedOilFilter(oilName, orderStandard, filteredOilData),
        );
      }
      return HttpResponse.json(filteredOilData);
    }

    return HttpResponse.error();
  }),

  http.get('/road', () => HttpResponse.json(roadData)),
];
