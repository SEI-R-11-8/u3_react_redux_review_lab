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
  console.log('here', props);
  useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <div>
      {props.postState.posts.map((post) => (
        <>
          <p>
            Name: {post.name}
            Location: {post.location}
            Details: {post.details}
            <img src={post.image} />
            <Link to={`/posts/${post._id}`}>{post.name}</Link>
          </p>
        </>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
