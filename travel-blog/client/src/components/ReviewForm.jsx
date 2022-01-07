import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CreateNewReview } from '../store/actions/ReviewActions';


const mapStateToProps = ({ reviewState }) => {
  return { reviewState };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    submitReview: (data) => dispatch(CreateNewReview(data))
  };
};

const ReviewForm = (props) => {

  const [form, setForm] = useState({
    locationName: '',
    content: '',
    description: '',
    address: '',
    likes: 0,
    photoUrl: '',
    comments: []
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log({ ...form, [e.target.name]: e.target.value });
  };

  return(
    <div className="review-form">
      <form>
        <input type="text" name="locationName"         placeholder={'What are you reviewing?'}
        onChange={handleChange} />
        <input type="text" name="content" placeholder={'Add your review here'}
        onChange={handleChange}/>
        <input type="text" name="address" placeholder={'Address/location'}
        onChange={handleChange}/>
        <input type="text" name="photoUrl" placeholder={'Add a link to a photo here!'}
        onChange={handleChange}/>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchtoProps)(ReviewForm);