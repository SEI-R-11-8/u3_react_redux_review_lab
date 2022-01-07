import { GetCities, GetCityById } from "../../services/CityService";
import { GET_CITIES, GET_CITY } from "../types";

export const LoadCities = () => {
  return async (dispatch) => {
    try {
      const cities = await GetCities();
      //console.log(cities.data.cities);
      dispatch({
        type: GET_CITIES,
        payload: cities.data.cities,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadCityByID = () => {
  return async (dispatch) => {
    try {
      const city = await GetCityById();
      dispatch({
        type: GET_CITY,
        payload: city,
      });
    } catch (error) {
      throw error;
    }
  };
};
