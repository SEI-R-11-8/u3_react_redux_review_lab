import {
  GetCities,
  GetCityById,
  GetReviews,
  GetReviewById
} from '../../services/CityService';
import { GET_CITIES, GET_CITY_REVIEWS, CREATE_CITY_REVIEW } from '../types';

export const LoadCities = () => {
  return async (dispatch) => {
    try {
      const cities = await GetCities();
      console.log(cities);
      dispatch({
        type: GET_CITIES,
        payload: cities
      });
    } catch (error) {
      throw error;
    }
  };
};

export const LoadReviews = (id) => {
  return async (dispatch) => {
    try {
      const reviews = await GetReviews(id);
      console.log(reviews);
      dispatch({
        type: GET_CITY_REVIEWS,
        payload: reviews
      });
    } catch (error) {
      throw error;
    }
  };
};
