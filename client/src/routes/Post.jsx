import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { LoadOnePost, UpdatePostLike } from '../store/actions/PostActions';

const mapStateToProps = (state) => {
    return {
        postState: state.postState
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        LoadOnePost: (id) => dispatch(LoadOnePost(id)),
        UpdatePostLike: (postId) => dispatch(UpdatePostLike(postId))
    };
};

const Post = (props) => {
    useEffect(() => {
        props.LoadOnePost(props.match.params.postId);
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
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);