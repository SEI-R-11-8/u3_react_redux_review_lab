import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadReviews } from '../store/actions/ReviewActions'
// import { ReviewForm } from './ReviewForm'

const mapStateToProps = ({ reviewState }) => {
   return { reviewState }
}

const mapActionsToProps = (dispatch) => {
   return {
      fetchReviews: () => dispatch(LoadReviews()),
   }
}

const Reviews = (props) => {

   useEffect(() => {
      console.log('this is working also')
      props.fetchReviews()
   }, [])

   return (
      <div className='r_grid'>
         <h1>Reviews</h1>
         <div>
            {props.reviewState.reviews.map((review, index) => (
               <div key={index} className='r_card'>
                  <h2>{review.title}</h2>
                  <p>{review.description}</p>
                  <p> {review.date}</p>
                  <p> {review.rating}</p>
                  {/* <button type='submit' className='rev__add_btn' onClick={(event) => { props.addReview(review._id) }}
                     value='add'> Add Review </button>
                  <button type='submit' className='rev_delete_btn' onClick={(event) => { props.deleteReview(review.id) }}
                     value='Delete'> Delete </button> */}
               </div>
            ))}
         </div>
      </div >
   )
}

export default connect(mapStateToProps, mapActionsToProps)(Reviews)
