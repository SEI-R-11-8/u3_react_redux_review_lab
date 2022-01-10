import React from 'react'

const Reviews = (props) => {
    return (
        <div>
             <h3>Reviews</h3>
                <div>{props.props.reviewState.reviews.map((rev, idx)=> <div key={idx}><li >{rev.review}</li></div>)}</div>
                <form >
                    <label>Submit review</label>
                    <input type="text"></input>
                    <button type="submit">Submit Review</button>
                </form>
            
        </div>
    )
}

export default Reviews
