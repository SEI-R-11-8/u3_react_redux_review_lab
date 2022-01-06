import React from "react";
import { Link } from "react-router-dom";

const Posts = (props) => {
  return (
    <div>
      <Link to={props.e._id} style={{ textDecoration: "none" }}>
        <p>{props.e.title}</p>
        <p>{props.e.description}</p>
        <p>{props.e.location}</p>
        <p>{props.e.price}</p>
        <img className="post-image" src={props.e.image} alt=""></img>
      </Link>
    </div>
  );
};

export default Posts;
