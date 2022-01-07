import Client from './';

export const GetBeaches = async () => {
  try {
    const res = await Client.get('/beaches');
    return res.data.beaches;
  } catch (error) {
    throw error;
  }
};

export const CreateBeach = async () => {
  try {
    const res = await Client.post(`/addbeach`);
    return res.data.beaches;
  } catch (error) {
    throw error;
  }
};
