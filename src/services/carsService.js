import carsData from "../database/cars.json";

export const getAll = () => {
  return carsData;
};

export const getById = (id) => {
  return carsData.find(object => id === object.id);
};

export const getBrands = () => {

  const result = carsData.reduce((previousValue, currentValue) => {
    previousValue[currentValue.name] = true;
    return previousValue;
  }, {})

  return Object.keys(result);
};

export const getCarsByModel = (model) => {
  return carsData.filter((item) => (model === item.name));
};
