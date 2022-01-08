import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { LoadComments } from '../store/actions/PostActions';

const BASE_URL = 'http://localhost:3001/api';

const mapStateToProps = ({ commentState }) => {
  console.log('mapStateToProps', commentState);
  return { commentState };
};

const mapDispatchToProps = (dispatch) => {
  console.log('MapDispatchToProps');
  return {
    fetchComments: (id) => dispatch(LoadComments(id))
  };
};

const Comments = (props) => {
  console.log('comments props', props);
  const [Comment, setComment] = useState();
  const [newComment, setNewComment] = useState({
    username: '',
    details: ''
  });
  console.log(props);
  useEffect(() => {
    props.fetchComments(props.id);
  }, []);

  // const allComments = async () => {
  //   const res = await axios.post(`${BASE_URL}/createcomments`, newComment);
  //   setComment(res.data.posts);
  //   console.log(res.data.posts);
  // };

  return (
    <div>
      <h2>Rendered</h2>
      <div>{props ? props.id : ''}</div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
