import { GetCities } from "../../services/CityService";
import { GET_CITIES } from "../types";

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
