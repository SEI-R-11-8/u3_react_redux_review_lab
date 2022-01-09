import Client from './';

export const GetLocations = async () => {
  try {
    const res = await Client.get(`/locations`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetLocationById = async (locationId) => {
  try {
    const res = await Client.get(`/locations/${locationId}`);
    console.log(res);
    return res.data;
  } catch (error) {
    throw error;
  }
};
