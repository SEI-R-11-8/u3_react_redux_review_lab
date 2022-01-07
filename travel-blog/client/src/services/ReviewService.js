import Client from './';

export const GetReviews = async () => {
  try {
    const res = await Client.get(`/reviews`);
    console.log(res.data);
    console.log(res.data.reviews);
    return res.data.reviews;
  } catch (error) {
    throw error;
  }
};

export const CreateReview = async (formValue, getState) => {
  try {
    const res = await Client.post(`/reviews`, { review: formValue });
    return res.data.reviews;
  } catch (error) {
    throw error;
  }
};
