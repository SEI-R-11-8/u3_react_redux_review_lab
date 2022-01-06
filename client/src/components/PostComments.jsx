import React from "react";

function PostComments(props) {
  return (
    <div>
      <p>{props.e.name}</p>
      <p>{props.e._id}</p>
      <p>{props.e.rating}</p>
      <p>{props.e.text}</p>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default PostComments;
