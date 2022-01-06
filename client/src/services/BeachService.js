import Client from './';

export const GetBeaches = async () => {
  try {
    const res = await Client.get('/beaches');
    return res.data.beaches;
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
