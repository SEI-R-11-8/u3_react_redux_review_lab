const {GET_DESTINATION_BY_ID} = require('../types')

const initialState = {
    destination: {}
}

const DestinationDetailReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DESTINATION_BY_ID: 
            return {...state, destination: action.payload}
        default: 
            return {...state}
    }
}

export default DestinationDetailReducer