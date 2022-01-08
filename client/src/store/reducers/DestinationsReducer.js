const { GET_DESTINATION, GET_DESTINATION_BY_ID, UPDATE_DESTINATION, DELETE_DESTINATION, CREATE_DESTINATION, ADD_DESTINATION } = require('../types')

const destinationState = {
    destinations: [],
    newDestination: ''
}

const DestinationReducer = (state = destinationState, action) => {
    switch (action.type) {
        case GET_DESTINATION:
            return { ...state, destinations: action.payload }
        case GET_DESTINATION_BY_ID:
            return { ...state, destinations: state.destinations.filter((destination, index) => index === action.payload) }
        // case UPDATE_DESTINATION:
        //     return { ...state, destinations: action.payload }
        case DELETE_DESTINATION:
            return { ...state, destinations: state.destinations.filter((destination, index) => index !== action.payload) }
        case ADD_DESTINATION:
            return { ...state, destinations: [...state.destinations, action.payload], newDestination: '' }
        case CREATE_DESTINATION:
            return { ...state, destinations: action.payload }
        default:
            return { ...state }
    }
}




export default DestinationReducer
