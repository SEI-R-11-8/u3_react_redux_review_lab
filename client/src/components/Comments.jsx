import React from 'react'

const Comments = (props) => {
    return (
        <div>
            <h3>Comments</h3>
            <div>{props.props.commentState.comments.map((com, idx)=> <div key={idx}><li >{com.comment}</li><button>Delete</button></div>)}
            </div>
                <form onSubmit={props.handleSubmit}>
                    <label>Submit comment</label>
                    <input type="text" onChange={props.handleChange}></input>
                    <button type="submit">Submit Comment</button>
                </form>
        </div>
    )
}

export default Comments