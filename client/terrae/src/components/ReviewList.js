import React from 'react'
import { connect } from 'react-redux'
import ReviewForm from './ReviewForm'
import {
   AddReview,
   RemoveReview,
   CreateNewReview,
} from '../store/actions/ReviewActions'

const ReviewList = (props) => {
   console.log(props)

   const handleChange = (event) => {
      props.createReview(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.addReview(props.reviewState.newReview)
   }
   return <div>
      <ReviewForm
         newReview={props.reviewState.newReview}
         handleChange={handleChange}
         handleSubmit={handleSubmit}
      />
      {props.reviewState.reviews.map((review, index) => (
         <li key={index}>{review}
            <button onClick={() => props.removeReview(index)}> Delete</button></li>
      ))}
   </div>
}

const mapStateToProps = (state) => {
   return {
      removeState: state.removeState
   }
}

const mapActionsToProps = (dispatch) => {
   return {
      addRemove: (newReview) => dispatch(AddReview(newReview)),
      removeReview: (index) => dispatch(RemoveReview(index)),
      createReview: (formValue) => dispatch(CreateNewReview(formValue)),
   }
}

export default connect(mapStateToProps, mapActionsToProps)(ReviewList) 