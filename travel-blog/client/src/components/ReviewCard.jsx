import React from 'react'
import { connect } from 'react-redux';
import { getAllReviews } from '../store/actions/ReviewActions';

const mapStateToProps = ({ reviewState }) => {
  return { reviewState }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchReviews:()=>dispatch(getAllReviews())
  }
}

const ReviewCard = () => {
  return <div></div>
}

export default connect(mapStateToProps,mapDispatchtoProps)(ReviewCard)