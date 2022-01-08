import Client from './';

export const GetComments = async () => {
  try {
    const res = await Client.get(`/comments/`);
    console.log(res.data.comments);
    return res.data.comments;
  } catch (error) {
    throw error;
  }
};

export const CreateComment = async (formValue) => {
  try {
    await Client.post('/comments', formValue);
  } catch (error) {
    throw error;
  }
};
