import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { AddReview, LoadReview } from '../store/actions/CityActions'

const mapActionsToProps = (dispatch) => {
    return {
      addReview: (newReview) => dispatch(AddReview(newReview)),
      createReview: (formValue) => dispatch(LoadReview(formValue))
    }
  }

const PlusReview = (props) => {

  const handleName = (event) => {
    props.createReview(event.target.value)
  }

    const handleChange = (event) => {
        props.createReview(event.target.value)
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
          // value={newReview}
          onChange={handleName}
        />
        <br />
        <input
          type="text"
          name="newReview"
          // value={newReview}
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