import Client from './';

export const GetBeachesService = async () => {
  try {
    const res = await Client.get('/beaches');
    return res.data.beaches;
  } catch (error) {
    throw error;
  }
};

export const CreateBeachService = async (form) => {
  try {
    const res = await Client.post(`/addbeach`, form);
    return res.data.beaches;
  } catch (error) {
    throw error;
  }
};
