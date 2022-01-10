const Comment = (props) => {
    return (
        <div className="postComment">
            <p>{props.comment.content}</p>
            <p><em>{props.comment.author}</em></p>
        </div>
    );
};

export default Comment;