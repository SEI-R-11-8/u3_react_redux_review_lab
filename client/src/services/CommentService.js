import Client from ".";

export const GetCommentsByID = async (id) => {
  try {
    const res = await Client(`/comments/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const PostComment = async () => {
  try {
    const res = await Client.post("/comment");
    console.log(res);
    return res;
  } catch (error) {
    throw error;
  }
};
