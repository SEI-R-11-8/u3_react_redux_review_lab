import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadReviews } from '../store/actions/CityActions';
import { AddReview, LoadReview } from '../store/actions/CityActions';

// const mapStateToProps = ({ reviewState }) => {
//     return { reviewState }
// }

const mapStateToProps = (state) => {
  return {
    reviewState: state.reviewState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: () => dispatch(LoadReviews())
  };
};

const Reviews = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchReviews(props.match.params.id);
  }, []);

  return (
    <div>
      {props.reviewState.reviews.map((review) => (
        <ul key={review.id}> {review.review}</ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
