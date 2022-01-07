import React, { useEffect } from 'react';
// line below connects store to component
import { connect } from 'react-redux';
import { LoadComments } from '../store/actions/LocationActions';

const mapStateToProps = ({ commentState }) => {
  return { commentState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadComments(id))
  };
};

const Comments = (props) => {
  useEffect(() => {
    props.fetchComments(props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div>
      {props.commentState.comments.map((comment) => (
        <ul key={comment.id}>{comment.content}</ul>
      ))}
    </div>
  );
};
