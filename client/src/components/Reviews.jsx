import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LoadReviews } from '../store/actions/ReviewActions'
import { connect } from 'react-redux'

const mapStateToProps = ({ reviewState }) => {
    return { reviewState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: () => dispatch(LoadReviews())
    }
}

function DisplayReviews(props) {

    useEffect(() => {
        props.fetchReviews()
    }, [])

    console.log(props.reviewState)

    return (
        <div>
            <h1>Some Reviews:</h1>
            <ul >
                {props.reviewState.reviews &&
                    props.reviewState.reviews.map((review) => (
                        <li key={review._id}>
                            <h2>{review.name}</h2>
                            <img src={`${review.image}`} alt={review.name} />
                            <h4>{review.description}</h4>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayReviews)
