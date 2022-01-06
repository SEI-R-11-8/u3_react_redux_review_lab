import axios from 'axios';

export const GetReviews = async () => {
  try {
    const res = await axios.get(`http://localhost:3001/api/reviews`);
    return res.data.results;
  } catch (error) {
    throw error;
  }
};
