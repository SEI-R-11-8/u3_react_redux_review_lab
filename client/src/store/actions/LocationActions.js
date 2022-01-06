import { GET_ALL_LOCATIONS, GET_LOCATION_BY_ID } from "../types";
import { RequestAllLocations } from '../services/LocationServices'

export const GetAllLocations = () => {
  return async (dispatch) => {
    const locations = await RequestAllLocations();
    dispatch({
      type: GET_ALL_LOCATIONS,
      payload: locations
    })
  }
}