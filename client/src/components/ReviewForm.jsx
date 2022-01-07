import React from 'react';

const ReviewForm = ({handleSubmit, handleUsernameChange,handleReviewChange, reviewState}) => {
  return (
    <form>
      <input
        type="text"
        name="username"
        placeholder='User name'
        value={reviewState.username}
        onChange={handleUsernameChange}
      />
      <input
        type="text"
        name="review"
        placeholder='Review'
        value={reviewState.review}
        onChange={handleReviewChange}
      />                                                       
     
      <input type="submit" onClick={handleSubmit}/>
    </form>
  );
};
export default ReviewForm;
