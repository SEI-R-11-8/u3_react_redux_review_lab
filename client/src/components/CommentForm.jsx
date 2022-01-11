const CommentForm = (props) => {
  return (
    <form>
      <h3>New Comment</h3>
      <label htmlFor="username">Username:</label>
      <input 
        type="text" 
        name="username" 
        onChange={props.handleChange}
      />
      <label htmlFor="comment">Comment:</label>
      <textarea 
        type="text" 
        name="comment" 
        onChange={props.handleChange}
      />
      <button type="submit" onClick={()=>{props.handleSubmit(props.newComment)}}>Submit</button>
    </form>
  )
}

export default CommentForm