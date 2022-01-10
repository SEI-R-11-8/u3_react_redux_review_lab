import { AddComment } from "../store/actions/LocationActions"

const CommentForm = (props) => {
  return (
    <form>
      <h3>New Comment</h3>
      <h5>Username:</h5>
      <input type="text" name="newCommentUsername" value={props.newComment} onChange={props.newComment}/>
      <h5>Comment:</h5>
      <textarea type="text" name="newCommentComment" value={props.newComment} onChange={props.newComment}/>
      <button type="submit" onClick={()=>{}}>Submit</button>
    </form>
  )
}

export default CommentForm