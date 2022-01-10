import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadCommentsAction } from '../store/actions/BeachActions';

const mapStateToProps = ({ commentState }) => {
  return { commentState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: () => dispatch(LoadCommentsAction())
  };
};

const CommentCard = (props) => {
  useEffect(() => {
    props.fetchComments();
    // console.log(props.commentState);
  }, []);

  // comment id: props.commentState.comments[0].beach_id

  return (
    <div>
      {props.commentState.comments
        .filter((comment) => props.beachID === comment.beach_id)
        .map((comment) => (
          <ul key={comment._id}>
            "{comment.content}" -{comment.author}
          </ul>
        ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentCard);
