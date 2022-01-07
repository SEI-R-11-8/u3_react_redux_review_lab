import React, { useEffect } from "react";
import { connect } from "react-redux";
import Comments from "./Comments";
import PostAComment from "./PostAComment";
import { LoadComments, LoadOnePost, PostComment, ChangeName, ChangeText, ChangeRating, ChangeId } from "../store/actions/PostActions";

const mapStateToProps = ({ postState, commentState }) => {
  return { postState, commentState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (id) => dispatch(LoadComments(id)),
    fetchPosts: (id) => dispatch(LoadOnePost(id)),
    postComment: (value, id) => dispatch(PostComment(value, id)),
    changeName: (value) => dispatch(ChangeName(value)),
    changeText: (value) => dispatch(ChangeText(value)),
    changeRating: (value) => dispatch(ChangeRating(value)),
    changeId: (value) => dispatch(ChangeId(value)),
  };
};

function PostsDetails(props) {
  useEffect(() => {
    props.fetchComments(props.match.params.id);
    props.fetchPosts(props.match.params.id);
    props.changeId(props.match.params.id);
  }, [props.match.params.id]);

  const handleName = (e) => {
    props.changeName(e.target.value);
  };

  const handleText = (e) => {
    props.changeText(e.target.value);
  };

  const handleRating = (e) => {
    props.changeRating(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.postComment(props.commentState, props.match.params.id);
    await props.fetchComments(props.match.params.id);
  };

  return (
    <div>
      <p>{props.postState.post.description}</p>
      <p>{props.postState.post.title}</p>
      <p>{props.postState.post.price}</p>
      <img className="post-image" src={props.postState.post.image} alt=""></img>
      <h1>Leave a comment</h1>
      <PostAComment {...props} handleName={handleName} handleText={handleText} handleRating={handleRating} handleSubmit={handleSubmit} />
      {props.postState.comments.map((e, i) => (
        <Comments {...props} e={e} key={i} />
      ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsDetails);
