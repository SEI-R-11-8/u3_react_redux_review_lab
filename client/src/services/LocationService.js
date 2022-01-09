import Client from './';

export const GetLocations = async () => {
  try {
    const res = await Client.get('/locations');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetComments = async () => {
  try {
    const res = await Client.get('/comments');
    return res.data;
  } catch (error) {
    throw error;
  }
};
