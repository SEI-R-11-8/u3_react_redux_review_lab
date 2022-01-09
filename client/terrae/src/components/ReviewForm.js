import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CreateReview } from '../store/actions/ReviewActions'
import { AddReview } from '../store/actions/ReviewActions'


const mapStateToProps = ({ createReview }) => {
   return { createReview }
}

const mapActionsToProps = (dispatch) => {
   return {
      createReview: () => dispatch(CreateReview()),
      addReview: () => dispatch(AddReview()),
   }
}

const ReviewForm = (props) => {

   useEffect(() => {
      console.log('this is working also')
      props.createReviews()
   }, [])


   return (
      <form>
         <input
            type="text"
            name="reviewTitle"
            value={props.review.title}
            onChange={props.handleChange}
         />
         <input
            type="text"
            name="reviewDescription"
            value={props.review.description}
            onChange={props.handleChange}
         />
         <input
            type="text"
            name="reviewDate"
            value={props.review.date}
            onChange={props.handleChange}
         />
         <input
            type="text"
            name="reviewRating"
            value={props.review.rating}
            onChange={props.handleChange}
         />
         <button type="submit" onClick={props.handleSubmit}>
            Add Review
         </button>
         <button type="submit" onClick={props.handleSubmit}>
            Delete
         </button>
      </form>
   )
}

export default connect(mapStateToProps, mapActionsToProps)(ReviewForm)
