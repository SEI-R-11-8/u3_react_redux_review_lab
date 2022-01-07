import Client from './';

export const GetLocations = async () => {
  try {
    const res = await Client.get('/locations');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetLocationWeather = async (locationId) => {
  try {
    const res = await Client.get(`/locations/${locationId}`);
    return res.data.Weather;
  } catch (error) {
    throw error;
  }
};
