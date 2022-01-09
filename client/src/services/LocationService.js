import Client from './';

export const GetLocations = async () => {
  try {
    const res = await Client.get(`/locations`);
    return res.data.locations;
  } catch (error) {
    throw error;
  }
};

export const GetLocationById = async (locationId) => {
  try {
    const res = await Client.get(`/locations/${locationId}`);
    console.log(res);
    return res.data.locations;
  } catch (error) {
    throw error;
  }
};

export const GetComments = async () => {
  try {
    const res = await Client.get(`/comments`);
    console.log(res);
    return res.data.comments;
  } catch (error) {
    throw error;
  }
};

export const GetCommentById = async (commentId) => {
  try {
    const res = await Client.get(`/comments/${commentId}`);
    console.log(res);
    return res.data.comments;
  } catch (error) {
    throw error;
  }
};
