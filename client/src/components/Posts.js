import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadPosts } from '../store/actions/PostAction';

const mapStateToProps = ({ postState }) => {
  return { postState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (id) => dispatch(LoadPosts(id))
  };
};

const Posts = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  return <div>{props}</div>;
};
