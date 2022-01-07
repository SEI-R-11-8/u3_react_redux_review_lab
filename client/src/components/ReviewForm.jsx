import React from 'react';

const ReviewForm = ({handleSubmit, handleUsernameChange,handleReviewChange, reviewState}) => {
  return (
    <form className="form">
      <input
        type="text"
        name="username"
        placeholder='User name'
        value={reviewState.username}
        onChange={handleUsernameChange}
      />
      <input className="review-input"
        type="text"
        name="review"
        placeholder='Review'
        value={reviewState.review}
        onChange={handleReviewChange}
      />                                                       
     
      <input className="btn "type="submit" onClick={handleSubmit}/>
    </form>
  );
};
export default ReviewForm;
