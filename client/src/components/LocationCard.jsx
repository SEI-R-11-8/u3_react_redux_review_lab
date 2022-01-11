import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadCurrentLocation, LoadComments, CreateNewComment, AddComment, LikeLocation } from '../store/actions/LocationActions';
import CommentForm from './CommentForm';

const mapStateToProps = ({ locationsState, commentsState }) => {
  return { locationsState, commentsState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocation: (id) => dispatch(LoadCurrentLocation(id)),
    fetchComments: (id) => dispatch(LoadComments(id)),
    createComment: (formValue) => dispatch(CreateNewComment(formValue)),
    addComment: (commentInfo) => dispatch(AddComment(commentInfo)),
    addLike: (locationId, likesCount) => dispatch(LikeLocation(locationId, likesCount))
  };
};

const LocationCard = (props) => {
  useEffect(() => {
    props.fetchLocation(props.match.params.id)
    props.fetchComments(props.match.params.id)
    props.createComment({ ...props.commentsState.newComment, location: props.match.params.id })
  }, [props.match.params.id])

  const handleCommentChange = (event) => {
    props.createComment({ ...props.commentsState.newComment, [event.target.name]: event.target.value })
  }

  const handleCommentSubmit = () => {
    props.addComment(props.commentsState.newComment)
  }

  const handleLikes = () => {
    console.log('test')
    props.addLike(props.match.params.id, props.locationsState.currentLocation.likes)
    // props.fetchLocation(props.match.params.id)
  }

  return (
    <div>
      <h2>{props.locationsState.currentLocation.city}, {props.locationsState.currentLocation.country}</h2>
      <img src={props.locationsState.currentLocation.image} alt={props.locationsState.currentLocation.city} />
      <p>{props.locationsState.currentLocation.description}</p>
      <button className='likes-button' onClick={() => handleLikes()}>Likes: {props.locationsState.currentLocation.likes}</button>
      <div className='comments-container'>
        {props.commentsState.comments.map((comment) => (
          <div className='comment' key={comment._id}>
            <h6>{comment.username}</h6>
            <p>{comment.comment}</p>
            {/* <button onClick={() => handleLikes()}>Likes: {comment.likes}</button> */}
          </div>
        ))}
        <CommentForm newComment={props.commentsState.newComment} 
          handleChange={handleCommentChange}
          handleSubmit={handleCommentSubmit}
          newComment={props.commentsState.newComment}
        />
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);
