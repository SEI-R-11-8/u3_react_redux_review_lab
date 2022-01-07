import Client from './';

export const GetLocations = async () => {
  try {
    const res = await Client.get('/locations');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetLocationComments = async (locationId) => {
  try {
    const res = await Client.get(`/locations/${locationId}`);
    return res.data.Comments;
  } catch (error) {
    throw error;
  }
};
