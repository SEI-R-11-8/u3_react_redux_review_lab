import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LoadReviews } from '../store/actions/ReviewActions'
import { LoadDestinations, LoadDestinationById } from '../store/actions/DestinationActions'
import { connect } from 'react-redux'

debugger

const mapStateToProps = ({ reviewState, destinationState }) => {
    return { reviewState, destinationState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: () => dispatch(LoadReviews()),
        fetchDestinations: () => dispatch(LoadDestinations()),
        fetchDestinationsById: () => dispatch(LoadDestinationById())
    }
}

function DisplayReviews(props) {

    const { id } = useParams()


    useEffect(() => {
        props.fetchDestinationsById()
        // props.fetchReviews()
    }, [id])

    // console.log(props.destinationState.id)

    return (
        <div className='review_page'>
            <h1>Destination</h1>

            <div>

            </div>

            <h1>Reviews:</h1>
            <div className='leave_review'>
                <h3>Write a Review</h3>
                <form>
                    <input type='text' placeholder='Username'></input>
                    <textarea cols="70" rows="10"></textarea>
                    <button>Submit Review</button>
                </form>
            </div>

            <div>
                <ul >
                    {props.reviewState.reviews &&
                        props.reviewState.reviews.map((review) => (
                            <li key={review._id} className='review_box'>
                                <h2>Destination:{review.name}</h2>
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
