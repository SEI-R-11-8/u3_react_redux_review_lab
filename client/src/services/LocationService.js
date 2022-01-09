import Client from './';

export const GetLocations = async () => {
  try {
    const res = await Client.get('/locations');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetComments = async (locationId) => {
  try {
    const res = await Client.get(`/comments/${locationId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
