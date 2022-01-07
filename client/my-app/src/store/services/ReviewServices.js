import Client from './';

export const RequestCreationOfNewReview = async (id, newReviewInfo) => {
  const result = await Client.post(`/${id}/review`, newReviewInfo);
  return result.data;
};
