import { GetBeaches } from '../../services/BeachService';
import { GET_BEACHES } from '../types';

export const LoadBeaches = () => {
  return async (dispatch) => {
    try {
      const beaches = await GetBeaches();
      // console.log(beaches);
      dispatch({
        type: GET_BEACHES,
        payload: beaches
      });
    } catch (error) {
      throw error;
    }
  };
};

// export const LoadProducts = (id) => {
//   return async (dispatch) => {
//     try {
//       const products = await GetDepartmentProducts(id);
//       console.log(products);
//       dispatch({
//         type: GET_DEPARTMENT_PRODUCTS,
//         payload: products
//       });
//     } catch (error) {
//       throw error;
//     }
//   };
// };
