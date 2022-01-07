import { GET_DESTINATIONS } from '../types';

const iState = {
  destinations: []
};

const DestinationReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_DESTINATIONS:
      return { ...state, destinations: action.payload };
    default:
      return { ...state };
  }
};

export default DestinationReducer;
