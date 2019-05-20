import carsData from "../database/cars.json";
import brandsData from "../database/brands.json";

export const getAll = () => {
  return carsData;
};

// export const getById = (id) => {
//   return carsData.find(object => id === object.id);
// };

export const getBrands = () => {

  const resultsObject = carsData.reduce((previousValue, currentValue) => {
    previousValue[currentValue.name] = true;
    return previousValue;
  }, {});

  const resultsArray = Object.keys(resultsObject);

  const results = resultsArray.map((name) => {
    return {name, img:  brandsData[name]}
  });

  return results;
};
