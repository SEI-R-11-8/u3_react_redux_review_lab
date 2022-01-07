import { GET_DESTINATION_DETAILS } from '../types';

const iState = {
  details: []
};

const DetailsReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_DESTINATION_DETAILS:
      return { ...state, details: action.payload };

    default:
      return { ...state };
  }
};

export default DetailsReducer;
