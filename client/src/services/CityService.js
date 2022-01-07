import Client from ".";

export const GetCities = async () => {
  try {
    const res = await Client.get("/cities");

    return res;
  } catch (error) {
    throw error;
  }
};
