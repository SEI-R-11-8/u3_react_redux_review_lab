import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { LoadOnePost, UpdatePostLike } from '../store/actions/PostActions';
import { LoadPostReviews } from '../store/actions/ReviewActions';
import { LoadPostComments } from '../store/actions/CommentActions';
import Review from '../components/Review';
import Comment from '../components/Comment';

const mapStateToProps = (state) => {
    return {
        postState: state.postState,
        reviewState: state.reviewState,
        commentState: state.commentState
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        LoadOnePost: (id) => dispatch(LoadOnePost(id)),
        UpdatePostLike: (postId) => dispatch(UpdatePostLike(postId)),
        LoadPostReviews: (postId) => dispatch(LoadPostReviews(postId)),
        LoadPostComments: (postId) => dispatch(LoadPostComments(postId))
    };
};

const Post = (props) => {
    useEffect(() => {
        props.LoadOnePost(props.match.params.postId);
        props.LoadPostReviews(props.match.params.postId);
        props.LoadPostComments(props.match.params.postId);
    }, []);
    
    return (
        <div>
            <h1>{props.postState.postById.title}</h1>
            <Link to={'/'} className='homeLink'>{'<'} Back Home</Link>
            <div className='postDetails'>
                <img src={props.postState.postById.imgUrl} alt={props.postState.postById.title} />
                <p>{props.postState.postById.article}</p>
                <button onClick={() => props.UpdatePostLike(props.match.params.postId)}>
                    <span>👍</span>{props.postState.postById.likes}
                </button>
            </div>
            <div className='reviewDiv'>
                <h3>Reviews:</h3>
                {props.reviewState.reviews.map((index) => (
                    <Review key={index._id} review={index} />
                ))}
                <button 
                    onClick={() => props.history.push(`/reviewform/${props.match.params.postId}`)}
                    className='reviewBtn'>
                    Write a Review!
                </button>
            </div>
            <div className='commentDiv'>
                <h3>Comments:</h3>
                {props.commentState.comments.map((index) => (
                    <Comment key={index._id} comment={index} />
                ))}
                <form>
                    <textarea placeholder='Write a comment'></textarea>
                    <input 
                        type='text'
                        placeholder='name'
                    />
                    <button type='submit'>Add comment</button>
                </form>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);