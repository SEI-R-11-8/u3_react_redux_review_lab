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
  return (
    <div>
      <img src={`${props.photoURL}`} alt="Photo"></img>
      <h3>{props.locationName}</h3>
      <p>{props.address}</p>
      <p>{props.content}</p>
      <div className="likes-count">Likes: {props.likes}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
