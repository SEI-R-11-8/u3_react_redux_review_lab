const { GET_DESTINATIONS, GET_DESTINATION_BY_ID} = require('../types')

const initialState = {
    destinations: [],
    details: []
}

const DestinationReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DESTINATIONS:
            return {...state, destinations: action.payload}
        case GET_DESTINATION_BY_ID: 
            return {...state, details: action.payload}
        default: 
            return {...state}
    }
}

export default DestinationReducer