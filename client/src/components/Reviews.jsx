import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LoadReviews } from '../store/actions/ReviewActions'
import { LoadDestinations, LoadDestinationById } from '../store/actions/DestinationActions'
import { connect } from 'react-redux'


const mapStateToProps = ({ reviewState, destinationState }) => {
    return { reviewState, destinationState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: () => dispatch(LoadReviews()),
        fetchDestinationsById: (id) => dispatch(LoadDestinationById(id))
    }
}

function DisplayReviews(props) {

    const { id } = useParams()


    useEffect(() => {
        props.fetchDestinationsById(id)
        props.fetchReviews()
    }, [])

    return (
        <div className='review_page'>
            <div>
                <h2>{props.destinationState.destinations.name}</h2>
                <img className='detail_img' src={`${props.destinationState.destinations.image}`}></img>
                <h4>{props.destinationState.destinations.description}</h4>
            </div>

            <h2>Comments:</h2>
            <div className='leave_review'>
                <h3>Write a comment</h3>
                <form>
                    <input type='text' placeholder='Username'></input>
                    <textarea cols="70" rows="10"></textarea>
                    <button>Submit Coment</button>
                </form>
            </div>

            <div>
                <ul >
                    {props.reviewState.reviews &&
                        props.reviewState.reviews.map((review) => (
                            <li key={review._id} className='review_box'>
                                <h2>{review.name}</h2>
                                <h3>Rating:{review.rating}</h3>
                                <h4>Description:{review.description}</h4>
                                <button>Delete</button>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayReviews)
