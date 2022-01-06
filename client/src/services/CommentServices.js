import Client from './';

export const GetComments = async () => {
  try {
    const res = await Client.get('/comments');

    return res.data.comments;
  } catch (error) {
    throw error;
  }
};

export const GetCommentsById = async (id) => {
  try {
    const res = await Client.get(`/comments/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const CreateComments = async (id) => {
  try {
    const res = await Client.post(`/comments/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};
