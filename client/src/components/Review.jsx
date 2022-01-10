import { connect } from 'react-redux';
import { UpdateReviewLike } from '../store/actions/ReviewActions';

const mapStateToProps = (state) => {
    return {
        postState: state.postState,
        reviewState : state.reviewState
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        UpdateReviewLike: (reviewId, postId) => dispatch(UpdateReviewLike(reviewId, postId))
    };
};

const Review = (props) => {
    return (
        <div className="postReview">
            <h4>Rating {props.review.rating}/5</h4>
            <p>{props.review.content}</p>
            <p><em>By: {props.review.author}</em></p>
            <button onClick={() => props.UpdateReviewLike(props.review._id, props.postState.postById._id)}>
                <span>👍</span>{props.review.likes}
            </button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);