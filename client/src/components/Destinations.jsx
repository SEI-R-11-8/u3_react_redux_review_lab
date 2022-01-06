import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadDestinations } from '../store/actions/DestinationActions';

const mapStateToProps = ({ destinationState, reviewState }) => {
	return { destinationState, reviewState };
};

const mapDispatchToProps = (dispatch) => {
	return {
		getDestinations: () => dispatch(LoadDestinations()),
	};
};

const Destinations = (props) => {
	useEffect(() => {
		props.getDestinations();
	}, []);

	console.log(props);

	return (
		<div className='Destinations'>
			Hello from Destinations!
			{props.destinationState.destinations.map((destination) => (
				<div>
					<Destinations key={destination._id} name={destination.name} />
				</div>
			))}
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Destinations);
