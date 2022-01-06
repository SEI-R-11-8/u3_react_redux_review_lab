import {
  GET_CITIES,
  GET_CITY_REVIEWS,
  CREATE_REVIEW,
  CITY_LOADING_TYPE
} from '../types';

import {
  GetCities,
  GetCityById,
  GetReviews,
  GetReviewsById
} from '../../services/CityServices';

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
