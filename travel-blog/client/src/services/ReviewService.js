import Client from './';

export const GetReviews = async () => {
  try {
    const res = await Client.get(`/reviews`);
    return res.data.reviews;
  } catch (error) {
    throw error;
  }
};

export const CreateReview = async (formValue) => {
  try {
    await Client.post('/reviews', formValue);
  } catch (error) {
    throw error;
  }
};
