import { GetBeaches } from '../../services/BeachService';
import { CreateBeach } from '../../services/BeachService';
import { GET_BEACHES } from '../types';
import { ADD_BEACH } from '../types';
import { NEW_BEACH } from '../types';

export const LoadBeaches = () => {
  return async (dispatch) => {
    try {
      const beaches = await GetBeaches();
      dispatch({
        type: GET_BEACHES,
        payload: beaches
      });
    } catch (error) {
      throw error;
    }
  };
};

export const AddBeachAction = (beach) => {
  return async (dispatch) => {
    try {
      const newBeach = await CreateBeach();
      console.log(newBeach);
      dispatch({
        type: ADD_BEACH,
        payload: beach
      });
    } catch (error) {
      throw error;
    }
  };
};

export const CreateNewBeach = (formValue) => ({
  type: NEW_BEACH,
  payload: formValue
});
