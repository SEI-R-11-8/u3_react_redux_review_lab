import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { LoadOnePost, UpdatePostLike } from '../store/actions/PostActions';
import { LoadPostReviews } from '../store/actions/ReviewActions';
import Review from '../components/Review';

const mapStateToProps = (state) => {
    return {
        postState: state.postState,
        reviewState: state.reviewState
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        LoadOnePost: (id) => dispatch(LoadOnePost(id)),
        UpdatePostLike: (postId) => dispatch(UpdatePostLike(postId)),
        LoadPostReviews: (postId) => dispatch(LoadPostReviews(postId))
    };
};

const Post = (props) => {
    useEffect(() => {
        props.LoadOnePost(props.match.params.postId);
        props.LoadPostReviews(props.match.params.postId)
    }, []);
    
    return (
        <div>
            <h1>{props.postState.postById.title}</h1>
            <Link to={'/'} className='homeLink'>Back Home</Link>
            <div className='postDetails'>
                <img src={props.postState.postById.imgUrl} alt={props.postState.postById.title} />
                <p>{props.postState.postById.article}</p>
                <button onClick={() => props.UpdatePostLike(props.match.params.postId)}><span>👍</span>{props.postState.postById.likes}</button>
            </div>
            <div>
                {props.reviewState.reviews.map((index) => (
                    <Review key={index._id} review={index}/>
                ))}
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);