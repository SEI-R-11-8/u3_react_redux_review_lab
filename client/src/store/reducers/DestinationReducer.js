import {
	ADD_DESTINATION,
	CREATE_DESTINATION,
	REMOVE_DESTINATION,
} from '../types';

const initialState = {
	destinations: [],
	newDestination: '',
};

const DestinationReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_DESTINATION:
			return {
				...state,
				todos: [...state.destination, action.payload],
				newDestination: '',
			};
		case CREATE_DESTINATION:
			return { ...state, newDestination: action.payload };
		case REMOVE_DESTINATION:
			const newDestinations = [...state.destinations];

			newDestinations.splice(parseInt(action.payload), 1);
			return { ...state, destinations: newDestinations };
		default:
			return { ...state };
	}
};

export default DestinationReducer;
