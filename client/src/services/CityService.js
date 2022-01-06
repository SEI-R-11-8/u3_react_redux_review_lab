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
    const res = await Client.get(`/cities/${cityId}`);
    return res.data.Reviews;
  } catch (error) {
    throw error;
  }
};

export const GetReview = async () => {
  try {
    const res = await Client.get('/reviews');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetReviewById = async (reviewId) => {
  try {
    const res = await Client.get(`/reviews/${reviewId}`);
    return res.data.Reviews;
  } catch (error) {
    throw error;
  }
};

// export const CreateCityReview = async (cityId) => {
//   try {
//     const res = await Client.post(`/cities/${cityId}`)
//   }
// }
