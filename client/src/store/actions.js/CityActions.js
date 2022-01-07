import { GetCities } from "../../services/CityService";
import { GET_CITIES } from "../types";

export const LoadCities = () => {
  return async (dispatch) => {
    try {
      const cities = await GetCities();
      dispatch({
        type: GET_CITIES,
        payload: cities,
      });
    } catch (error) {
      throw error;
    }
  };
};
