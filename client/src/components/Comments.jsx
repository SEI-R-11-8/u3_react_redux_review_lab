import { connect } from 'react-redux';
import { LoadComments } from '../store/actions/LocationActions';
import React, { useEffect } from 'react';

const mapStateToProps = ({ commentState }) => {
  return { commentState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (commIds) => dispatch(LoadComments(commIds))
  }
};

const Comments = (props) => {
  useEffect(() => {
    props.fetchComments(props.commentIds);
  }, []);

  return (
     props.commentState.comments?
    <ol className='container'>
      {props.commentState.comments.map((comment, index) => (
        <li className='comment' key={index}> 
              <h3>Name: {comment.name}</h3>
              <h3>City: {comment.city}</h3>
              <h3>Rating: {comment.rating}</h3>
              <h3>Comment: {comment.comment}</h3>
              <button onClick={props.deleteComment}>Delete</button>
        </li>
      ))}
    </ol> : null
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);