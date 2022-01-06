import React from "react";
import { connect } from "react-redux";
import { DeleteComment } from "../store/actions/PostActions";

const mapStateToProps = ({ postState }) => {
  return { postState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (id) => dispatch(DeleteComment(id)),
  };
};

function PostComments(props) {
  const handleDelete = () => {
    props.deleteComment(props.e._id);
  };

  return (
    <div>
      <p>{props.e.name}</p>
      <p>{props.e._id}</p>
      <p>{props.e.rating}</p>
      <p>{props.e.text}</p>
      <button onClick={handleDelete}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
