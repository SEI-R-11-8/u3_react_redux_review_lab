import { useState } from "react";
import { connect } from "react-redux";
import { AddReview } from "../store/actions/ReviewActions";

const mapStateToProps = (state) => {
    return {
        postState: state.postState,
        reviewState: state.reviewState
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        AddReview: (postId, newReview) => dispatch(AddReview(postId, newReview))
    };
};

const ReviewForm = (props) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [author, setAuthor] = useState('');

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        let newReview = {
            author: author,
            content: review,
            rating: rating,
            likes: 0,
            post: props.match.params.postId
        };
        props.AddReview(props.match.params.postId, newReview);
        props.history.push(`/post/${props.match.params.postId}`);
    };
    
    return (
        <div className="reviewForm">
            <h1>Review Form</h1>
            <h2>{props.postState.postById.title}</h2>
            <form onSubmit={handleReviewSubmit}>
                <label for='rating'>Rating:</label>
                <input 
                    onChange={(e) => setRating(e.target.value)} 
                    type='number' 
                    name="rating" 
                    min='1' 
                    max='5' 
                />
                <label for='review'>Review:</label>
                <textarea 
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your Review here"
                    value={review} 
                    name="review"
                />
                <label for='author'>Author:</label>
                <input
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Reviewer Name"
                    value={author} 
                    name='author'
                />
                <button type="submit">Post Review</button>
            </form>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);