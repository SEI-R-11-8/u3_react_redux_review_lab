import {
	ADD_DESTINATION,
	CREATE_DESTINATION,
	REMOVE_DESTINATION,
	ADD_REVIEW,
	CREATE_REVIEW,
	REMOVE_REVIEW,
} from '../types';

export const AddDestination = (destination) => ({
	type: ADD_DESTINATION,
	payload: destination,
});

export const CreateDestination = (formValue) => ({
	type: CREATE_DESTINATION,
	payload: formValue,
});

export const RemoveDestination = (index) => ({
	type: REMOVE_DESTINATION,
	payload: index,
});

export const AddReview = (review) => ({
	type: ADD_REVIEW,
	payload: review,
});

export const CreateReview = (formValue) => ({
	type: CREATE_REVIEW,
	payload: formValue,
});

export const RemoveReview = (index) => ({
	type: REMOVE_REVIEW,
	payload: index,
});
