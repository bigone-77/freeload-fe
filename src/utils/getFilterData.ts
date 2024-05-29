import { OilStation } from '@/models/OilStation';
import { Rest } from '@/models/Rest';

export function getFilteredRest(sorted: string, restData: Rest[]) {
  if (sorted === 'WIFI') {
    return restData.filter((rest) => rest.wifi);
  }
  if (sorted === 'REPAIR') {
    return restData.filter((rest) => rest.repair);
  }
  if (sorted === 'ELECTRONIC') {
    return restData.filter((rest) => rest.electronic);
  }
  if (sorted === 'SHELTER') {
    return restData.filter((rest) => rest.shelter);
  }
  if (sorted === 'PHARMACY') {
    return restData.filter((rest) => rest.pharmacy);
  }
  if (sorted === 'PET') {
    return restData.filter((rest) => rest.pet);
  }
  if (sorted === 'NURSE') {
    return restData.filter((rest) => rest.nurse);
  }
  if (sorted === 'DISABLED') {
    return restData.filter((rest) => rest.disabled);
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
    filteredOilData = filteredOilData.filter((d) => d.electric);
  }

  if (hydr) {
    filteredOilData = filteredOilData.filter((d) => d.hydrogen);
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