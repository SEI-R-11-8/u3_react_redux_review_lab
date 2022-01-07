import Client from './'

export const RequestCreationOfNewReview = async (locationId, newReviewInfo) => {
  const result = await Client.post(`/${locationId}/review`,newReviewInfo )
  return result.data
}