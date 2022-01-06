import React from "react";
import { Link } from "react-router-dom";

const Posts = (props) => {
  return (
    <div>
      <Link to={props.e._id} style={{ textDecoration: "none" }}>
        <h1>{props.e.title}</h1>
        <h4>{props.e.price}</h4>
        <img className="post-image" src={props.e.image} alt=""></img>
      </Link>
    </div>
  );
};

export default Posts;
