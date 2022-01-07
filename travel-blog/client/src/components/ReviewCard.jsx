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

const ReviewCard = (props) => {
  console.log(props.photoUrl)
  return (
  <div>
    <img src={`${props.photoUrl}`}></img>
    <h2>{props.locationName}</h2>
    <h3>{props.address}</h3>
    <p>{props.content}</p>
    <div className="likes-count">Likes: {props.likes}</div>

    </div>
    )
}

export default connect(mapStateToProps,mapDispatchtoProps)(ReviewCard)