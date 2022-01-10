import { connect } from 'react-redux';
import { LoadCommentById } from '../store/actions/LocationActions';
import React, { useEffect } from 'react';

const mapStateToProps = ({ commentState }) => {
  return { commentState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCommentById: (commentId) => dispatch(LoadCommentById(commentId))
  }
};

const Comment = (props) => {
  useEffect(() => {
    props.fetchCommentById(props.commentId);
  }, [props.commentId]);
  
  return (
    <div>
      <div className='comment'>
      <h3>Name: {props.commentState.comment.name}</h3>
      <h3>City: {props.commentState.comment.city}</h3>
      <h3>Rating: {props.commentState.comment.rating}</h3>
      <h3>Comment: {props.commentState.comment.comment}</h3>
      <button>Delete</button>
      <button>Update</button>            
      </div>
    </div>    
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);