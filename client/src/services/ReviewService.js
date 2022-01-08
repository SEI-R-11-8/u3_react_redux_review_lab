import Client from ".";

export const GetReviewsByID = async (id) => {
  try {
    const res = await Client.get(`/reviews/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};
