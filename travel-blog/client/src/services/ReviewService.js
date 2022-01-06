import Client from './';

export const GetReviews = async () => {
  try {
    const res = await Client.get(`http://localhost:3001/api/reviews`);
    return res.data.reviews;
  } catch (error) {
    throw error;
  }
};
