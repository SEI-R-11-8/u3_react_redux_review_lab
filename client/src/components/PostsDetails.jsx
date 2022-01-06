import React, { useEffect } from "react";
import { connect } from "react-redux";
import PostComments from "./PostComments";
import { LoadComments, LoadOnePost } from "../store/actions/PostActions";

const mapStateToProps = ({ postState }) => {
  return { postState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadComments(id)),
    fetchPosts: (id) => dispatch(LoadOnePost(id)),
  };
};

function PostsDetails(props) {
  useEffect(() => {
    props.fetchComments(props.match.params.id);
    props.fetchPosts(props.match.params.id);
  }, [props.match.params.id]);

  console.log(props.postState.post);

  return (
    <div>
      <p>{props.postState.post.description}</p>
      <p>{props.postState.post.title}</p>
      <p>{props.postState.post.price}</p>
      <img className="post-image" src={props.postState.post.image} alt=""></img>
      {props.postState.comments.map((e, i) => (
        <PostComments e={e} key={i} />
      ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetails);
