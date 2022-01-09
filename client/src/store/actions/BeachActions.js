import { GetBeachesService } from '../../services/BeachService';
import { CreateBeachService } from '../../services/BeachService';
import { GET_BEACHES } from '../types';
import { ADD_BEACH } from '../types';
import { NEW_BEACH } from '../types';

export const LoadBeachesAction = () => {
  return async (dispatch) => {
    try {
      const beaches = await GetBeachesService();
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
      const newBeach = await CreateBeachService();
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

export const CreateNewBeachAction = (formValue) => ({
  type: NEW_BEACH,
  payload: formValue
});
