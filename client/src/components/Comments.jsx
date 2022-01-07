import React from "react";
import { connect } from "react-redux";
import { DeleteComment, LoadComments } from "../store/actions/PostActions";

const mapStateToProps = ({ postState }) => {
  return { postState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadComments(id)),
    deleteComment: (id) => dispatch(DeleteComment(id)),
  };
};

function PostComments(props) {
  const handleDelete = async () => {
    await props.deleteComment(props.e._id);
    await props.fetchComments(props.match.params.id);
  };

  return (
    <div>
      <p>{props.e.name}</p>
      <p>{props.e.rating}</p>
      <p>{props.e.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
