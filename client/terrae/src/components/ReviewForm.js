import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { CreateReview, AddReview, DeleteReview } from '../store/actions/ReviewActions'



const mapStateToProps = ({ reviewState }) => {
   return { reviewState }
}

const mapActionsToProps = (dispatch) => {
   return {
      createReview: () => dispatch(CreateReview()),
      addReview: () => dispatch(AddReview()),
      deleteReview: () => dispatch(DeleteReview()),

   }
}

const ReviewForm = (props) => {


   useEffect(() => {
      console.log('this is working also')
      // props.createReviews()
   }, [])



   return (
      <div className='r_form'>
         <form onSubmit={props.onSubmit}>
            <input
               type="text"
               name="title"
               placeholder={'Title of review...'}
               value={props.reviewState.createReview.title}
               onChange={props.handleChange}
            />
            <input
               type="text"
               name="description"
               placeholder={'Description...'}
               // value={props.reviewState.reviewForm.description}
               onChange={props.handleChange}
            />
            <input
               type="text"
               name="date"
               placeholder={'Date...'}
               // value={props.reviewState.reviewForm.date}
               onChange={props.handleChange}
            />
            <input
               type="text"
               name="rating"
               placeholder={'Rating 1-5...'}
               // value={props.reviewState.reviewForm.rating}
               onChange={props.handleChange}
            />
            <button type="submit" onClick={props.handleSubmit}>
               Add Review
            </button>
            {/* <button type="submit" onClick={props.handleSubmit}>
               Delete
            </button> */}
         </form>
      </div>
   )
}

export default connect(mapStateToProps, mapActionsToProps)(ReviewForm)
