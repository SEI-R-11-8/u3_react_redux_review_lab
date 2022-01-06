import Client from './';

export const GetDestinations = async () => {
  try {
    const res = await Client.get('/destination');
    return res.data;
  } catch (error) {
    throw error;
  }
};

// export const GetDepartmentProducts = async (departmentId) => {
//   try {
//     const res = await Client.get(`/departments/${departmentId}`)
//     return res.data.Products
//   } catch (error) {
//     throw error
//   }
// }
