import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadPosts } from '../store/actions/PostActions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ postState }) => {
  return { postState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(LoadPosts())
  };
};

const Posts = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <div>
      {props.postState.posts.map((post) => (
        <ul key={post._id}>{post.name}</ul>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
