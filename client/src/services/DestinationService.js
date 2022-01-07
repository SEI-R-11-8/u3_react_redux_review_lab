import Client from './';

export const GetDestinations = async () => {
  try {
    const res = await Client.get('/destination');
    return res.data.destination;
  } catch (error) {
    throw error;
  }
};

export const GetDetails = async (id) => {
  try {
    const res = await Client.get(`/destination/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetReviews = async () => {
  try {
    const res = await Client.get('/reviews');
    return res.data.review;
  } catch (error) {
    throw error;
  }
};

export const PostReviews = async () => {
  try {
    const res = await Client.post('/reviews');
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
