const Review = (props) => {
    return (
        <div className="postReview">
            <h4>Rating {props.review.rating}/5</h4>
            <p>{props.review.content}</p>
            <p><em>By: {props.review.author}</em></p>
            <button><span>👍</span>{props.review.likes}</button>
        </div>
    );
};

export default Review;