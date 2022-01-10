import Client from './';

export const GetCommentService = async () => {
  try {
    const res = await Client.get('/comments');
    return res.data.comments;
  } catch (error) {
    throw error;
  }
};

export const CreateCommentService = async (form) => {
  try {
    const res = await Client.post(`/addcomment`, form);
    return res.data.comment;
  } catch (error) {
    throw error;
  }
};
