import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadComments, LoadCommentById } from '../store/actions/LocationActions';
import React, { useEffect } from 'react';

const mapStateToProps = ({ locationState, commentState }) => {
  return { locationState, commentState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: () => dispatch(LoadComments())
  }
};

const Comments = (props) => {
  useEffect(() => {
    props.fetchComments();
  }, []);

  return (
     props.commentState.comments?
    <div className='container'>
      {props.commentState.comments.map((comment) => (
        <div className='comment-holder' key={comment._id}>
          <Link to={`/locations/${props.locId}/`}>
          <div className='comment'>
              <h3>{comment.name}</h3>
              <h3>{comment.comment}</h3>
              <h3>{comment.rating}</h3>
          </div>
          </Link>
        </div>
      ))}
    </div> : null
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);