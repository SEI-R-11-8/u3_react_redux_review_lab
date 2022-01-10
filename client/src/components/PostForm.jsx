import React from 'react'

const PostForm = (props) => {
  return (
    <form>
      <input
        type="text"
        name="newTodo"
        value={props.newTodo}
        onChange={props.handleChange}
      />
      <button type="submit" onClick={props.handleSubmit}>
        Post a Comment
      </button>
    </form>
  )
}

export default PostForm

{/* <form className='postform' onSubmit={handleSubmit}>
<input
  type="text"
  value={name}
  onChange={handleChange}
  name={'title'}
  placeholder={'title'}
/>
<input
  type="text"
  value={newReview.rating}
  onChange={handleChange}
  name={'text'}
  placeholder={'text'}
/>
<input
  type="text"
  value={newReview.rating}
  onChange={handleChange}
  name={'rating'}
  placeholder={'rating'}
/>
<input
  type="text"
  value={newReview.comment}
  onChange={handleChange}
  name={'comment'}
  placeholder={'comment'}
/>
<button type="submit">Post a Comment</button>
</form> */}