import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadCities } from '../store/actions/CityActions';
import Reviews from './Reviews';

const mapStateToProps = ({ cityState }) => {
  return { cityState };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchCities: () => dispatch(LoadCities()) };
};

const Cities = (props) => {
  useEffect(() => {
    props.fetchCities();
  }, []);

  return (
    <div>
      {props.cityState.cities.map((city) => (
        <ul>
          <Link to={`/reviews/details/${city._id}`} key={city._id}>
            {city.name}
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
