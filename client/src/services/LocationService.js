import Client from './';

export const GetLocations = async () => {
  try {
    const res = await Client.get('/locations');
    return res.data.locations;
  } catch (error) {
    throw error;
  }
};

export const GetComments = async (locationId) => {
  try {
    const res = await Client.get(`/comments/${locationId}`);
    return res.data.comments;
  } catch (error) {
    throw error;
  }
};

export const GetLocationById = async (locationId) => {
  try {
    const res = await Client.get(`/locations/${locationId}`);
    return res.data.location[0];
  } catch (error) {
    throw error;
  }
};

export const PostLocation = async (locationInfo) => {
  try {
    const res = await Client.post('/locations', locationInfo);
    return res.data.locations;
  } catch (error) {
    throw error;
  }
};

export const PostComment = async (commentInfo) => {
  try {
    const res = await Client.post('/comments', commentInfo);
    return res.data.comments;
  } catch (error) {
    throw error;
  }
};

export const AddLocationLike = async (locationId, currentLikes) => {
  console.log(currentLikes);
  try {
    const res = await Client.put(`/locations/${locationId}`, {
      likes: (currentLikes += 1)
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const AddCommentLike = async (commentId, likesAmount) => {
  try {
    const res = await Client.put(`/comments/${commentId}`, {
      likesAmount
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
