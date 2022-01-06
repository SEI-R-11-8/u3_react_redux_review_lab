import {GET_ALL_LOCATIONS, GET_LOCATION_BY_ID} from('../types')

const iState ={
  location: [],
  selectedLocation: {}
};

const LocationReducer = (state = iState,action) =>{
  switch(action.type){
    case GET_ALL_LOCATIONS:
      return {...state};
    case GET_LOCATION_BY_ID:
      return {...state}
    default:
      return{...state}
  }
}
export default LocationReducer