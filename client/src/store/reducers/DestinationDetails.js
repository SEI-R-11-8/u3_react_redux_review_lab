import { GET_DESTINATIONS_DETAILS } from "../types";

const iState = {
    destination: {}
}

const DestinationDetailsReducer = (state = iState, action) => {
    switch(action.type){
        case GET_DESTINATIONS_DETAILS:
            return {...state, destination: action.payload}
        default: 
            return {...state}
    }
}

export default DestinationDetailsReducer