import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  LoadDetails,
  PostNewReview,
  LoadReviews,
  CreateNewReview
} from '../store/actions/DestinationActions';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Reviews from '../components/Reviews';
import ReviewForm from '../components/ReviewForm';

const mapStateToProps = ({ detailState, reviewState }) => {
  return { detailState, reviewState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: () => dispatch(LoadReviews()),
    fetchDetails: (id) => dispatch(LoadDetails(id)),
    postReview: (formValue) => dispatch(PostNewReview(formValue)),
    createReview: (review) => dispatch(CreateNewReview(review))
  };
};

const DestinationPage = ({
  detailState,
  reviewState,
  fetchDetails,
  match,
  createReview,
  postReview,
  fetchReviews
}) => {
  useEffect(() => {
    fetchDetails(match.params.id);
  }, [match.params.id]);
  const details = detailState.details.destination;

  const newReviews = reviewState.newReview;

  const handleUsernameChange = (e) => {
    createReview({
      ...reviewState.newReview,
      username: e.target.value,
      destination_id: details._id
    });
    console.log(reviewState.newReview);
  };
  const handleReviewChange = (e) => {
    createReview({
      ...reviewState.newReview,
      review: e.target.value,
      destination_id: details._id
    });
    console.log(reviewState.newReview);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postReview(reviewState.newReview);
    fetchReviews();
    fetchReviews();
  };

  return (
    <div>
      {details && reviewState ? (
        <div>
          <h1>{details.city}</h1>
          <h3>{details.country}</h3>
          <Carousel>
            {details.img.map((image, i) => (
              <img key={i} src={image} alt="image" />
            ))}
          </Carousel>

          <p>{details.desc}</p>
          <ReviewForm
            reviewState={newReviews}
            handleUsernameChange={handleUsernameChange}
            handleReviewChange={handleReviewChange}
            handleSubmit={handleSubmit}
          />
          <Reviews destinationId={details._id} />
        </div>
      ) : null}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DestinationPage);
