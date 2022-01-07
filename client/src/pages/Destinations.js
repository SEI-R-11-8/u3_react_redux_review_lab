import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DestinationDetails from '../components/DestinationDetails';
import { LoadDestinations } from '../store/actions/DestinationActions';

const mapStateToProps = ({ destinationState }) => {
  return { destinationState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDestinations: () => dispatch(LoadDestinations())
  };
};

const Destinations = ({ destinationState, fetchDestinations }) => {
  useEffect(() => {
    fetchDestinations();
  }, []);
  const destinations = destinationState.destinations;

  return (
    <div className="destinations">
      {destinations
        ? destinations.map((destination, i) => (
            <DestinationDetails destination={destination} key={i} />
          ))
        : null}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Destinations);
