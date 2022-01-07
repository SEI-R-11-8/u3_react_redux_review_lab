import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { GetLocationById } from '../store/actions/LocationActions'
import { SetReviewAuthor, SetReviewRecommends, SetReviewContent, CreateNewReview } from '../store/actions/ReviewActions'

const mapStateToProps = (state) => {
  return {
    locationReducer: state.locationReducer
  }
}

const mapActionsToProps = (dispatch ) => {
  return {
    getLocationById: (id) => dispatch(GetLocationById(id)),
    setReviewAuthor: (author) => dispatch(SetReviewAuthor(author)),
    setReviewReccomends: (recommends) => dispatch(SetReviewRecommends())
  }
}
function DetailsPage(props) {

  useEffect(()=> {
    props.getLocationById(props.match.params.locationId)
  }, [props.match.params.locationId])

  const location= props.locationReducer.selectedLocation

  return (
    <div className="location-details" >
      <button 
      onClick={() => {
        props.history.push('/')
      }}>Back</button>

      <div className="location-image" style={{ backgroundImage: `url(${location.image})` }}>
        <h2>{location.name}</h2>
        
      </div>
      <form onSubmit={(e)=> {
        e.preventDefault()

      }}>
        <label htmlFor="name">Name</label>
        <input id="name" />
        <label htmlFor="reccomend">Reccomended</label>
        <input id="reccomended" type="checkbox" />
        <label htmlFor="content">Content</label>
        <textarea id="content" />
        <button type="submit">Submit</button>
      </form>
    <div>
      {location.reviews && location.reviews.map((review, index) => (
        <div key={index} className="review-card">
          <p>{review.author}</p>
          <p>Recommends: {review.recommends}</p>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  </div>
  )
}
export default connect(mapStateToProps,mapActionsToProps)(DetailsPage)