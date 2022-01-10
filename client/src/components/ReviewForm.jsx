import React from 'react';

const ReviewForm = (props) => {
  return (
    <form>
      <input
        type="text"
        name="newReview"
        value={props.newReview.review}
        onChange={props.handleChange}
      />
      <button type="submit" onClick={props.handleSubmit}>
        Add Review
      </button>
    </form>
  );
};

export default ReviewForm;