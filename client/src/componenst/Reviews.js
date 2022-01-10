import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  LoadCitisReviews,
  LoadReviewsById
} from '../store/actions/CityActions';
import { CITY_LOADING_TYPE } from '../store/types';

// const mapStateToProps = ({ reviewState }) => {
//   return { reviewState };
// };

// const mapDispatchToProps = (dispatch) => {
//   return { fetchReviews: (id) => dispatch(LoadCitisReviews(id)) };
// };

const Reviews = (props) => {
  const [pop, setPop] = useState('');
  useEffect(() => {
    // props.fetchReviews(props.cityId);
    async function reviewed() {
      const res = await axios.get(
        `http://localhost:3001/api/reviews/${props.cityId}`
      );
      setPop(res.data.thiscity[0].review);
    }
    reviewed();
  }, []);
  return <div className="ReviewComponent"> {pop} </div>;
  // return <div>{props.reviewState.reviews}</div>;
};

// export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
export default Reviews;
