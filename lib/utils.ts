import { Cast } from "../types/creditTypes";

const getDirector = (crew: Cast[]): string => {
  const result = crew.filter((obj) => {
    return obj.job === "Director";
  });
  return result[0].name;
};

const getCast = (cast: Cast[], number: number): Cast[] => {
  const data: Cast[] = [];
  for (let i = 0; i < number; i++) {
    data.push(cast[i]);
  }
  return data;
};

export { getDirector, getCast };
