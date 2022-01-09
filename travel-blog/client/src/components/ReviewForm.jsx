import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SetForm, SubmitForm } from '../store/actions/ReviewActions';


const mapStateToProps = ({ reviewState }) => {
  return { reviewState };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    setForm: (formValue)=> dispatch(SetForm(formValue)),
    submitForm: (data) => dispatch(SubmitForm(data))
  };
};

const ReviewForm = (props) => {
  const handleChange = (e) => {
    props.setForm({...props.reviewState.form, [e.target.name]: e.target.value})

  }

  const onSubmit =(e)=>{
    e.preventDefault()
    props.submitForm(props.reviewState.form)
    // console.log(props.reviewState.form)
  }
  useEffect(()=>{
    console.log(props.reviewState)
  },[])

  return(
    <div className="review-form">
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="locationName" 
          placeholder={'What are you reviewing?'}
          onChange={handleChange} 
          value={props.reviewState.form.locationName}
        />
        <input 
          type="text" 
          name="description"
          placeholder={'Description summary'}
          onChange={handleChange}
          value={props.reviewState.form.description}
        />
        <input 
          type="text" 
          name="content" 
          placeholder={'Add your review here'}
          onChange={handleChange}
          value={props.reviewState.form.content}
        />
        <input 
          type="text" 
          name="address" 
          placeholder={'Address/location'}
          onChange={handleChange}
          value={props.reviewState.form.address}
        />
        <input 
          type="text" 
          name="photoUrl" 
          placeholder={'Add a link to a photo here!'}
          onChange={handleChange}
          value={props.reviewState.form.photoUrl}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchtoProps)(ReviewForm);


  // const [form, setForm] = useState({
  //   locationName: '',
  //   content: '',
  //   description: '',
  //   address: '',
  //   likes: 0,
  //   photoUrl: '',
  //   comments: []
  // });
  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  //   console.log({ ...form, [e.target.name]: e.target.value });
  // };