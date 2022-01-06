import { GET_ALL_LOCATIONS, GET_LOCATION_BY_ID} from '../types'

const iState = { 
  locations: [],
  selectedLocation: {}
}

const LocationReducer = (state = iState, action ) => {
  switch(action.type) {
    case GET_ALL_LOCATIONS:
      return {...state, locations: action.payload}
    case GET_LOCATION_BY_ID:
      return {...state, selectedLocation: action.payload}
    default:
      return {...state}
  }
}

export default LocationReducer