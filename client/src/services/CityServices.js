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

export const GetCitiReviews = async (cityId) => {
  try {
    const res = await Client.get(`/reviews/${cityId}`);
    console.log(res.data.thiscity[0].review);
    return res.data.thiscity[0].review;
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
