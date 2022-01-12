import Client from './';

export const GetCities = async () => {
  try {
    const res = await Client.get('/cities');
    return res.data.cities;
  } catch (error) {
    throw error;
  }
};

export const GetCityById = async (cityId) => {
  try {
    const res = await Client.get(`/cities/details/${cityId}`);
    return res.data.cities;
  } catch (error) {
    throw error;
  }
};

export const GetReviews = async () => {
  try {
    const res = await Client.get('/reviews');
    return res.data.reviews;
  } catch (error) {
    throw error;
  }
};
export const GetReviewById = async (reviewId) => {
  try {
    const res = await Client.get(`/reviews/details/${reviewId}`);
    return res.data.reviews;
  } catch (error) {
    throw error;
  }
};

export const CreateReview = async (review) => {
  try {
    const res = await Client.post('/reviews', review);
    return res.data.reviews;
  } catch (error) {
    throw error;
  }
};
