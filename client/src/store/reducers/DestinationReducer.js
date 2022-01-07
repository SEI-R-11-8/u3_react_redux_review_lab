const { GET_DESTINATIONS, GET_DESTINATION_LOADING_TYPE } = require('../types')

const initialState = {
    destinations: [],
    destinationsLoading: ''
}

const DestinationReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DESTINATION_LOADING_TYPE:
            return {...state, destinationsLoading: action.payload }
        case GET_DESTINATIONS:
            return {...state, destinations: action.payload}
        default: 
            return {...state}
    }
}

export default DestinationReducer