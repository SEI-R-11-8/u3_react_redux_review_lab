import Client from ".";

export const GetCommentsByID = async (id) => {
  try {
    const res = await Client(`/comments/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};
