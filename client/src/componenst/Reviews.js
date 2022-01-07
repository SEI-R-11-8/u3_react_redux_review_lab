import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  LoadCitisReviews,
  LoadReviewsById
} from '../store/actions/CityActions';
import { CITY_LOADING_TYPE } from '../store/types';

const mapStateToProps = ({ reviewState }) => {
  return { reviewState };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchReviews: (id) => dispatch(LoadCitisReviews(id)) };
};

const Reviews = (props) => {
  useEffect(() => {
    // props.fetchReviews(props.cityId);
  }, []);

  console.log(props);

  return <div>{props.cityId}</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
