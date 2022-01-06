import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import comment from '../../../models/comment';
import { LoadComments } from '../store/actions/BeachActions';

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
      {props.commentState.comments.map((product) => (
        <ul key={comment._id}>
          {comment.author} {comment.author}
        </ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
