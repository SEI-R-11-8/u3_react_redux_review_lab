import Client from './';

export const GetPosts = async () => {
  try {
    const res = await Client.get('/posts');

    return res.data.posts;
  } catch (error) {
    throw error;
  }
};

export const GetPostsById = async (id) => {
  try {
    const res = await Client.get(`/posts/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const GetPostComments = async (postid) => {
  try {
    const res = await Client.get(`/comments/${postid}`);
    return res;
  } catch (error) {
    throw error;
  }
};
