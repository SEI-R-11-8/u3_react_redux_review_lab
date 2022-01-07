const { GET_DESTINATIONS } = require('../types')

const destinationState = {
    destinations: [],
}

const DestinationReducer = (state = destinationState, action) => {
    switch (action.type) {
        case GET_DESTINATIONS:
            return { ...state, destinations: action.payload }
        default:
            return { ...state }
    }
}

export default DestinationReducer