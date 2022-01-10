import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadCities } from '../store/actions/CityActions';
import { REVIEW_LOADING_TYPE } from '../store/types';
import Reviews from './Reviews';

const mapStateToProps = ({ cityState, reviewState }) => {
  return { cityState };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchCities: () => dispatch(LoadCities()) };
};

function Cities(props) {
  useEffect(() => {
    props.fetchCities();
  }, []);

  return (
    <div className="Feed">
      {props.cityState.cities.map((city) => (
        <ul className="Post">
          <Link to={'/cities'} key={city._id} className="Shell">
            <img src={city.url} />
            <div className="PostText">
              <h3>{city.name}</h3>
              <h5>{city.description}</h5>
            </div>
          </Link>
          <Reviews cityId={city._id} />
        </ul>
      ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
