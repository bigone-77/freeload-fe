const ROUTE_NAME_NUM = [
  { routeCode: '10', routeName: '경부선' },
  { routeCode: '100', routeName: '남해선' },
  { routeCode: '121', routeName: '무안광주선' },
  { routeCode: '122', routeName: '광주대구선' },
  { routeCode: '150', routeName: '서해안선' },
  { routeCode: '205', routeName: '완주장수선' },
  { routeCode: '207', routeName: '대구포항선' },
  { routeCode: '251', routeName: '호남선' },
  { routeCode: '270', routeName: '순천완주선' },
  { routeCode: '300', routeName: '서산영덕선' },
  { routeCode: '351', routeName: '통영대전선' },
  { routeCode: '352', routeName: '중부선' },
  { routeCode: '400', routeName: '평택제천선' },
  { routeCode: '450', routeName: '중부내륙선' },
  { routeCode: '500', routeName: '영동선' },
  { routeCode: '550', routeName: '중앙선' },
  { routeCode: '600', routeName: '서울양양선' },
  { routeCode: '650', routeName: '동해선' },
  { routeCode: '652', routeName: '울산포항선' },
  { routeCode: '1000', routeName: '수도권제1순환선' },
  { routeCode: '1040', routeName: '남해제2지선' },
  { routeCode: '1510', routeName: '서천공주선' },
  { routeCode: '2510', routeName: '호남선의 지선' },
  { routeCode: '3010', routeName: '상주영천선' },
  { routeCode: '4510', routeName: '중부내륙선의 지선' },
  { routeCode: '6000', routeName: '부산외곽순환선' },
];

export function getRouteCode(routeName: string) {
  const route = ROUTE_NAME_NUM.find((r) => r.routeName === routeName);
  return route ? route.routeCode : null;
}
