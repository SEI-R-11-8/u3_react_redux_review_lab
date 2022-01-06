import Client from './';

export const GetCities = async () => {
  try {
    const res = await Client.get('/cities');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetCityById = async (cityId) => {
  try {
    const res = await Client.get(`/cities/details/${cityId}`);
    return res.data.Cities;
  } catch (error) {
    throw error;
  }
};

export const GetReviews = async () => {
  try {
    const res = await Client.get('/reviews');
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const GetReviewById = async (reviewId) => {
  try {
    const res = await Client.get(`/reviews/details/${reviewId}`);
    return res.data.Reviews;
  } catch (error) {
    throw error;
  }
};

// export const CreateCityReview = async () => {
//   try {
//     const res = await Client.post('/reviews');
//     return res.data.Reviews;
//   } catch (error) {
//     throw error;
//   }
// };
