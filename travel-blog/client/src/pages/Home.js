import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllReviews } from '../store/actions/ReviewActions';
import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';

const mapStateToProps = ({ reviewState }) => {
  return { reviewState };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchReviews: () => dispatch(getAllReviews())
  };
};
const Home = (props) => {
  useEffect(() => {
    props.fetchReviews();
  }, []);

  return (
    <div>
      <div>This is home</div>
      <ReviewForm />
      {props.reviewState.reviews.map((review) => (
        <div className="review-card" key={review._id}>
          <ReviewCard
            locationName={review.locationName}
            address={review.address}
            content={review.content}
            photoUrl={review.photoUrl}
            likes={review.likes}
          />
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
