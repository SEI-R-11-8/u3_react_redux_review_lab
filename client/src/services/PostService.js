import Client from './';

export const GetPosts = async () => {
  console.log('get posts');
  try {
    const res = await Client.get('/posts');
    console.log('posts resposne', res.data.posts);
    return res.data.posts;
  } catch (error) {
    throw error;
  }
};

export const GetPostsById = async (id) => {
  console.log('postservice get post by id', id);

  try {
    const res = await Client.get(`/posts/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const GetPostComments = async (id) => {
  console.log('get post comments', id);
  try {
    const res = await Client.get(`/posts/${id}`);
    return res.data.comm;
  } catch (error) {
    throw error;
  }
};
