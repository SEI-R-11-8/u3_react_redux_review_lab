import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadCurrentLocation, LoadComments } from '../store/actions/LocationActions';
import CommentForm from './CommentForm';

const mapStateToProps = ({ locationsState, commentsState }) => {
  return { locationsState, commentsState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocation: (id) => dispatch(LoadCurrentLocation(id)),
    fetchComments: (id) => dispatch(LoadComments(id))
  };
};

const LocationCard = (props) => {
  useEffect(() => {
    props.fetchLocation(props.match.params.id)
    props.fetchComments(props.match.params.id)
  }, [props.match.params.id])

  return (
    <div>
      <h2>{props.locationsState.currentLocation.city}, {props.locationsState.currentLocation.country}</h2>
      <img src={props.locationsState.currentLocation.image} alt={props.locationsState.currentLocation.city} />
      <p>{props.locationsState.currentLocation.description}</p>
      <button className='likes-button'>Likes: {props.locationsState.currentLocation.likes}</button>
      <div className='comments-container'>
        {props.commentsState.comments.map((comment) => (
          <div className='comment' key={comment._id}>
            <h6>{comment.username}</h6>
            <p>{comment.comment}</p>
            <button>Likes: {comment.likes}</button>
          </div>
        ))}
        <CommentForm />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);
