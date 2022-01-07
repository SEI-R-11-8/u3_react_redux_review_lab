import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadLocations } from '../store/actions/LocationActions';

const mapStateToProps = ({ locationState }) => {
  return { locationState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations())
  };
};

const Locations = (props) => {
  useEffect(() => {
    props.fetchLocations();
  }, []);
  return (
    <div>
      {props.locationState.locations.map((location) => (
        <ul key={location.id}>
          <Link to={`/locations/${location.id}`}>{location.name}</Link>
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
