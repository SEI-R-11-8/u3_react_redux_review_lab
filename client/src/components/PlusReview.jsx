import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AddReview, LoadReview } from '../store/actions/CityActions'
import { CreateReview } from '../services/CityService'

const mapActionsToProps = (dispatch) => {
    return {
      createReview: (Review) => dispatch(CreateReview(Review)),
      addReview: (newReview) => dispatch(AddReview(newReview)),
      loadReview: (formValue) => dispatch(LoadReview(formValue))
    }
  }

const PlusReview = (props) => {

  const handleName = (event) => {
    console.log('Cool')
    props.loadReview(event.target.value)
  }

    const handleChange = (event) => {
        props.loadReview(event.target.value)
      }
    
      const handleSubmit = (event) => {
        event.preventDefault()
        props.addReview(props.addReview.newReview)
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
      </div>
    )
}

export default connect(mapActionsToProps) (PlusReview)