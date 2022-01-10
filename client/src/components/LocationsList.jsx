import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadLocations } from '../store/actions/LocationActions';

const mapStateToProps = ({ locationsState }) => {
  return { locationsState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations())
  };
};

const LocationsList = (props) => {
  useEffect(() => {
    props.fetchLocations();
  }, []);

  return (
    <div>
      {props.locationsState.locations.map((location) => (
        <ul key={location._id}>
          <Link to={`/locations/${location._id}`} className='location-links'>{location.city}, {location.country}</Link>
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
