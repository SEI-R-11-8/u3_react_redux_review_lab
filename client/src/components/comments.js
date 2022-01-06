import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ commentState }) => {
  return { commentState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: () => dispatch(LoadComments())
  };
};

const Comments = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchComments();
  }, []);

  const FormInput = (props) => {
    const [Comment, setComment] = useState();
    const [newComment, setNewComment] = useState({
      username: '',
      details: '',
      reference: ''
    });
  };
  const allComments = async () => {
    const res = await axios.post(`${BASE_URL}/createcomments`, newComment);
    setComment(res.data.posts);
    console.log(data);
  };

  const addComment = (e) => {
    e.preventDefault();
    const currentComment = Comments;
    const newestComment = newestComment;
    currentComment.push(newComment);
    setNewComment({
      username: '',
      details: '',
      reference: ''
    });
  };

  const handleChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value
    });
  };

  const formSubmit = (e) => {
    addComment(e);
    allComments();
    console.log(newComment);
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={username.name}
          onChange={handleChange}
          name={''}
          placeholder={'Name'}
        />
        <input
          type="text"
          value={updatedTrail.img}
          onChange={handleChange}
          name={'details'}
          placeholder={'comment here'}
        />
        <button>Create Comment</button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
