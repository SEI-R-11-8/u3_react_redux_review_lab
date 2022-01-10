import React from 'react'
import { connect } from 'react-redux'
import { AddReview, DeleteReview, CreateReview, } from '../store/actions/ReviewActions'

const mapStateToProps = ({ reviewState }) => {
   return { reviewState }
}

const mapActionsToProps = (dispatch) => {
   return {
      addReview: (reviewInfo) => dispatch(AddReview(reviewInfo)),
      deleteReview: (index) => dispatch(DeleteReview(index)),
      createReview: (key, value) => dispatch(CreateReview(key, value)),
   }
}

const ReviewList = (props) => {
   console.log('these props are working')

   const handleChange = (key, event) => {
      console.log(props.reviewState)
      console.log(event.target.value)
      props.createReview(key, event.target.value)

   }

   const handleSubmit = (event) => {
      event.preventDefault()
      console.log('banana')
      props.addReview(props.reviewState.createReview)
   }


   return (
      <div>
         <div className='r_form'>
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  name="title"
                  placeholder={'Title of review...'}
                  // value={props.reviewState.createReview.title}
                  onChange={(event) => { handleChange('title', event) }}
               />
               <input
                  type="text"
                  name="description"
                  placeholder={'Description...'}
                  // value={props.reviewState.reviewForm.description}
                  onChange={(event) => { handleChange('description', event) }}
               />
               <input
                  type="date"
                  name="date"
                  placeholder={'Date...'}
                  // value={props.reviewState.reviewForm.date}
                  onChange={(event) => { handleChange('date', event) }}
               />
               <input
                  type="text"
                  name="rating"
                  placeholder={'Rating 1-5...'}
                  // value={props.reviewState.reviewForm.rating}
                  onChange={(event) => { handleChange('rating', event) }}
               />
               <button type="submit" onClick={handleSubmit}>
                  Add Review
               </button>
               {/* <button type="submit" onClick={props.handleSubmit}>
               Delete
            </button> */}
            </form>
         </div>

         {/* {props.reviewState.reviews.map((review, index) => (
         <li key={index}>{review}
            <button onClick={() => props.deleteReview(index)}> Delete</button></li>
      ))} */}
      </div>
   )
}

// const mapStateToProps = (state) => {
//    return {
//       deleteState: state.deleteState
//    }
// }



export default connect(mapStateToProps, mapActionsToProps)(ReviewList) 