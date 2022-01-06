import React, { useEffect } from "react";
import { connect } from "react-redux";
import { LoadPosts } from "../store/actions/PostActions";
import Posts from "./Posts";

const mapStateToProps = ({ postState }) => {
  return { postState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts()),
  };
};

function Home(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  console.log(props.postState.posts);

  return (
    <div>
      {props.postState.posts.map((e, i) => (
        <Posts key={i} e={e} />
      ))}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
