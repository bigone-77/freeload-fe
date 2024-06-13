import { OilStation } from '@/models/OilStation';
import { Rest } from '@/models/Rest';

export function getFilteredRest(sorted: string, restData: Rest[]) {
  if (sorted === 'WIFI') {
    return restData.filter((rest) => rest.wifi === 'True');
  }
  if (sorted === 'ELECTRONIC') {
    return restData.filter((rest) => rest.electric_car === 'True');
  }
  if (sorted === 'PHARMACY') {
    return restData.filter((rest) => rest.pharmacy === 'True');
  }
  if (sorted === 'PET') {
    return restData.filter((rest) => rest.pet === 'True');
  }
  if (sorted === 'NURSE') {
    return restData.filter((rest) => rest.nursing_room === 'True');
  }
  if (sorted === 'DISABLED') {
    return restData.filter((rest) => rest.braile_block === 'True');
  }
  return restData;
}

export function getFilteredOil(
  data: OilStation[],
  elec?: boolean,
  hydr?: boolean,
  oil?: string,
  order?: string,
): OilStation[] {
  let filteredOilData = [...data];

  if (elec) {
    filteredOilData = filteredOilData.filter((d) => d.electric === '1');
  }

  if (hydr) {
    filteredOilData = filteredOilData.filter((d) => d.hydrogen === '1');
  }

  if (oil && order) {
    if (oil === 'GAS') {
      if (order === 'ASC') {
        return filteredOilData.sort(
          (a, b) => a.gasolinePrice - b.gasolinePrice,
        );
      }
      return filteredOilData.sort((a, b) => b.gasolinePrice - a.gasolinePrice);
    }
    if (oil === 'DI') {
      if (order === 'ASC') {
        return filteredOilData.sort((a, b) => a.diselPrice - b.diselPrice);
      }
      return filteredOilData.sort((a, b) => b.diselPrice - a.diselPrice);
    }
    if (oil === 'LPG') {
      const filteredByLPG = filteredOilData.filter(
        (d) => d.lpgPrice !== undefined,
      );
      if (order === 'ASC') {
        return filteredByLPG.sort((a, b) => a.lpgPrice! - b.lpgPrice!);
      }
      return filteredByLPG.sort((a, b) => b.lpgPrice! - a.lpgPrice!);
    }
  }

  return filteredOilData;
}
