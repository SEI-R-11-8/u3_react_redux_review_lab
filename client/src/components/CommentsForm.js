import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { LoadComments, LoadNewComments, AddComments } from '../store/actions/DestinationsActions';

const mapStateToProps = (state) => {
    return{
        CommentsState: state.CommentsState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newComment: (com) => dispatch(LoadNewComments(com)),
        addComment: (com) => dispatch(AddComments(com))
    }
}


const CommentsForm = (props) => {

    const handleChangeName = (e) => {
        props.newComment({comment: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addComment(props.CommentsState.newComment)
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor='comment'>Comment</label>
                <input type='text' id='comment' value={props.CommentsState.newComment.comment} onChange={handleChangeName} />

                {/* <label htmlFor='comment'>Comment</label>
                <textarea id='name' onChange={handleChangeComment}/>

                <label htmlFor='rating'>Rating</label>
                <input type='number' id='rating' onChange={handleChangeRating} /> */}

                <button>Submit</button>

            </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm)