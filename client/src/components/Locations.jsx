import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadLocations, LoadLocationById } from '../store/actions/LocationActions';
import React, { useEffect } from 'react';

const mapStateToProps = ({ locationState }) => {
  return { locationState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations()),
  }
};

const Locations = (props) => {
  useEffect(() => {
    props.fetchLocations();
  }, []);

  return (
     props.locationState.locations?
    <div className='container'>
      {props.locationState.locations.map((location) => (
  //  console.log(location.id)
        <div className='location-holder' key={location._id}>
          <Link to={`/locations/${location._id}`}>
          <div className='location'>
              <img src={location.image} alt=''/> 
              <h3>{location.city}</h3>
              <h3>{location.country}</h3>
          </div>
          </Link>
        </div>
      ))}
    </div> : null
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);