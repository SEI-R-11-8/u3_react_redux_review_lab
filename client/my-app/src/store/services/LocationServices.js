import Client from './';

export const RequestAllLocations = async () => {
  const res = await Client.get('/');
  console.log(res);
  return res.data;
};
