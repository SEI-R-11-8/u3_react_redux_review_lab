import { connect } from 'react-redux';
import { LoadLocationById, LoadCommentById } from '../store/actions/LocationActions';
import React, { useEffect } from 'react';
import Comments from './Comments';
import PostForm from './PostForm';

const mapStateToProps = ({ locationState, commentState }) => {
  return { locationState, commentState };
};
<button>Post a Comment?</button>
const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocationById: (locationId) => dispatch(LoadLocationById(locationId)),
    fetchCommentById: (commentId) => dispatch(LoadCommentById(commentId))
  }
};

const Location = (props) => {
  let commentsOfCity = []
  useEffect(() => {
    props.fetchLocationById(props.match.params.id);
  }, [props.match.params.id]);

  const handleChange = (e) => {
    props.createComment(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.postComment(props.commentState.comment)
  }
  const handleDelete = (index) => {
    props.deleteComment(index)
  }


  return (
    <div>
      <div className='locDetails'>
        <img src={props.locationState.location.image} alt=''/> 
        <h3>{props.locationState.location.city}</h3>
        <h3>{props.locationState.location.country}</h3>
          {
          props.locationState.location.comments? <h3> Comments: 
          {props.locationState.location.comments.length}
          </h3>:null }
         <PostForm />

          <h3>Show All Comments here: </h3>
          {props.locationState.location.comments? <ol>
              {props.locationState.location.comments.map((commentId, index)=>(
              <li key={index}>
                 {commentId} 
              </li>
            ))}
            </ol>: null}
          <Comments commentIds = {props.locationState.location.comments}/> 
      </div>
    </div>    
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Location);


