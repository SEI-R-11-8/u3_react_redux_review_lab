import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SetComment, SubmitComment } from '../store/actions/ReviewActions';


const mapStateToProps = ({ reviewState }) => {
  return { reviewState };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    setComment: (formValue)=> dispatch(SetComment(formValue)),
    submitComment: (data) => dispatch(SubmitComment(data))
  };
};

const CommentForm = (props) => {
  const handleChange = (e) => {
    props.setComment({...props.reviewState.commentForm, [e.target.name]: e.target.value, ['review_id']: props.reviewID})
  }

  const onSubmit =(e)=>{
    e.preventDefault()
    props.submitComment(props.reviewState.commentForm)
  }
  // useEffect(()=>{
  //   console.log(props.reviewID)
  // },[])

  return(
    <div className="review-form">
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="content" 
          placeholder={'Leave a comment...'}
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="author"
          placeholder={'your name'}
          onChange={handleChange} 
        />
        <button type="submit">Submit</button>
        <p>{props.reviewID}</p>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchtoProps)(CommentForm);

