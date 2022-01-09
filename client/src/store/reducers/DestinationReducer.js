const { GET_DESTINATIONS } = require('../types')

const initialState = {
    destinations: []
}

const DestinationReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DESTINATIONS:
            return {...state, destinations: action.payload}
        default: 
            return {...state}
    }
}

export default DestinationReducer