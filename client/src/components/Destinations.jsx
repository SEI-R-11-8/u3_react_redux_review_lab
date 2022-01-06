import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadDestinations } from '../store/actions/DestinationActions';

const mapStateToProps = ({ destinationState }) => {
	return { destinationState };
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
				<div key={destination._id}>
					<Link to={`/destinations/${destination._id}`}>
						{destination.city}
					</Link>
				</div>
			))}
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Destinations);
