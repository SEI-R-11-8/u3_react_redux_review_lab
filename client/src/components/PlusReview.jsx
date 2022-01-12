import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AddReview, LoadReviews, LoadReview } from '../store/actions/CityActions'

// const mapActionsToProps = (dispatch) => {
//     return {
//       addReview: (newReview) => dispatch(AddReview(newReview)),
//       createReview: (formValue) => dispatch(LoadReview(formValue))
//     }
//   }

  const mapStateToProps = (state) => {
    return {
      reviewState: state.reviewState
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: () => dispatch(LoadReviews()),
        addReview: (newReview) => dispatch(AddReview(newReview)),
        createReview: (formValue) => dispatch(LoadReview(formValue))
    }
}

const PlusReview = (props) => {
  // console.log(props.reviewState)
  useEffect(() => {
    props.fetchReviews()
}, [])

  const handleName = (event) => {
    props.createReview(event.target.value)
  }

    const handleChange = (event) => {
        props.createReview(event.target.value)
      }
      const submitValue = { review: 'love it', city_id: '61d71073c88d2ae6facd834a' }
    
      const handleSubmit = (event) => {
        console.log('click')
        event.preventDefault()
        props.addReview(submitValue)
      }
    


    return (
        <div>
        <form>
          City Name: 
        <input
          type="text"
          name="cityName"
          onChange={handleName}
        />
        <br />
        <input
          type="text"
          name="newReview"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Review
        </button>
  
      </form>
      <h1>{props.review}</h1>
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (PlusReview)