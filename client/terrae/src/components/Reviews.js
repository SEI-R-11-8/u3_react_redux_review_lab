import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadReviews } from '../store/actions/ReviewActions'
import ReviewList from './ReviewList'

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
            <ReviewList />
            {props.reviewState.reviews.map((review, index) => (
               <div key={index} className='r_card'>
                  <h2>{review.title}</h2>
                  <p>{review.description}</p>
                  <p> {review.date}</p>
                  <p> {review.rating}</p>
                  <button type='submit' className='rev_delete_btn' onClick={() => { props.deleteReview(index) }}
                     value='Delete'> Delete </button>
               </div>
            ))}
         </div>
      </div >
   )
}

export default connect(mapStateToProps, mapActionsToProps)(Reviews)
