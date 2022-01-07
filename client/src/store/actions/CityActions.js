import {
  GetCities,
  GetCityById,
  GetReviews,
  GetReviewById,
  CreateReview
} from '../../services/CityService';
import {
  GET_CITIES,
  GET_CITY_REVIEWS,
  GET_CITY,
  GET_REVIEW,
  ADD_CITY_REVIEW,
  NEW_CITY_REVIEW
} from '../types';

export const AddReview = (review) => ({
  type: ADD_CITY_REVIEW,
  payload: review
});

export const LoadReview = (formValue) => ({
  type: NEW_CITY_REVIEW,
  payload: formValue
});

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

export const LoadReviews = () => {
  return async (dispatch) => {
    try {
      const reviews = await GetReviews();
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

export const LoadReviewsById = (id) => {
  return async (dispatch) => {
    try {
      const reviews = await GetReviewById(id);
      console.log(reviews);
      dispatch({
        type: GET_REVIEW,
        payload: reviews
      });
    } catch (error) {
      throw error;
    }
  };
};
export const LoadCityById = (id) => {
  return async (dispatch) => {
    try {
      const city = await GetCityById(id);
      console.log(city);
      dispatch({
        type: GET_CITY,
        payload: city
      });
    } catch (error) {
      throw error;
    }
  };
};
