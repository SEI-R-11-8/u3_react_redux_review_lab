import Client from ".";

export const GetCities = async () => {
  try {
    const res = await Client.get();
    console.log(res);
    return res;
  } catch (error) {
    throw error;
  }
};
