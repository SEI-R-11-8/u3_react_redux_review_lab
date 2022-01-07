import Client from './';

export const RequestAllLocations = async () => {
  const res = await Client.get('/');
  console.log(res);
  return res.data;
};
export const RequestLocationById = async (locationId) => {
  const results = await Client.get(`${locationId}`);
  return results.data;
};
