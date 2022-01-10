import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadCities } from '../store/actions/CityActions';
import { REVIEW_LOADING_TYPE } from '../store/types';
import Reviews from './Reviews';

const mapStateToProps = ({ cityState, reviewState }) => {
  return { cityState, reviewState };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchCities: () => dispatch(LoadCities()) };
};

function Cities(props) {
  useEffect(() => {
    props.fetchCities();
  }, []);
  console.log(props.reviewState);

  return (
    <div>
      {props.cityState.cities.map((city) => (
        <ul>
          <Link to={'/cities'} key={city._id}>
            {city.name}
          </Link>
          <Reviews cityId={city._id} />
        </ul>
      ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
