import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NewDestination from '../components/NewDestination';
import Destinations from '../components/Destinations';

const mapStateToProps = (state) => {
	// return {
	// 	destinationState: state.destinationState,
	// };
};

const mapActionsToProps = (dispatch) => {
	// return {
	// 	addDestination: (newDestination) =>
	// 		dispatch(AddDestination(newDestination)),
	// 	removeDestination: (index) => dispatch(RemoveDestination(index)),
	// 	createDestination: (formValue) => dispatch(CreateDestination(formValue)),
	// };
};

const Home = (props) => {
	console.log(props);

	const handleChange = (e) => {
		// props.createDestination(e.target.value);
	};

	const handleSubmit = (e) => {
		// e.preventDefault();
		// props.addDestination(props.destinationState.newDestination);
	};

	const handleDelete = (e, index) => {
		// props.removeDestination(index);
	};

	return (
		<div className='Destinations'>
			Hello from Home
			<Destinations />
		</div>
	);
};

export default Home;
// export default connect(mapStateToProps, mapActionsToProps)(Home);
