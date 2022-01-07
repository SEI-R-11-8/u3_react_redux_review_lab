import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { GetLocationById } from '../store/actions/LocationActions'
import { SetReviewAuthor, SetReviewRecommends, SetReviewContent, CreateNewReview } from '../store/actions/ReviewActions'

const mapStateToProps = (state) => {
  return {
    locationReducer: state.locationReducer,
    reviewReducer: state.reviewReducer
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    getLocationById: (locationId) => dispatch(GetLocationById(locationId)),
    setReviewAuthor: (author) => dispatch(SetReviewAuthor(author)),
    setReviewRecommends: (recommends) => dispatch(SetReviewRecommends(recommends)),
    setReviewContent: (content) => dispatch(SetReviewContent(content)),
    createNewReview: (locationId, newReviewInfo) => dispatch(CreateNewReview(locationId, newReviewInfo))
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
        props.createNewReview(props.match.params.locationId, {
          author: props.reviewReducer.author,
          recommends: props.reviewReducer.recommends,
          content: props.reviewReducer.content
        })
      }}>
        <label htmlFor="name">Name</label>
        <input id="name" onChange={(e)=>{
          props.setReviewAuthor(e.target.value) 
        }} />
        <label htmlFor="recommend">Recommended</label>
        <input id="recommended" type="checkbox" onChange={(e)=>{
          props.setReviewRecommends(e.target.value) 
        }}/>
        <label htmlFor="content">Content</label>
        <textarea id="content" onChange={(e)=>{
          props.setReviewContent(e.target.value) 
        }}/>
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