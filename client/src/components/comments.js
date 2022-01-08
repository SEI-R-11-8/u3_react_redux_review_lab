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
    fetchComments: () => dispatch(LoadComments())
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
    props.fetchComments();
  }, []);

  const allComments = async () => {
    const res = await axios.post(`${BASE_URL}/createcomments`, newComment);
    setComment(res.data.posts);
    console.log(res.data.posts);
  };

  // const addComment = (e) => {
  //   e.preventDefault();
  //   const currentComment = Comments;
  //   const newestComment = newestComment;
  //   currentComment.push(newComment);
  //   setNewComment({
  //     username: '',
  //     details: ''
  //   });
  // };

  // const handleChange = (e) => {
  //   setNewComment({
  //     ...newComment,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const formSubmit = (e) => {
  //   addComment(e);
  //   allComments();
  //   console.log(newComment);
  // };
  return (
    <div>
      {/* <form onSubmit={formSubmit}>
        <input
          type="text"
          value={newComment.username}
          onChange={handleChange}
          name={''}
          placeholder={'Name'}
        />
        <input
          type="text"
          value={newComment.details}
          onChange={handleChange}
          name={'details'}
          placeholder={'comment here'}
        />
        <button>Create Comment</button>
      </form> */}
      <h2>Rendered</h2>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
