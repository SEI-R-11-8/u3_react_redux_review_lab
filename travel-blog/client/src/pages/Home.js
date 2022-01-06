import { PromiseProvider } from 'mongoose';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllReviews } from '../store/actions/ReviewActions';

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
  console.log(props.reviewState);
  return <div>This is Home</div>;
};

export default connect(mapStateToProps, mapDispatchtoProps)(Home);
