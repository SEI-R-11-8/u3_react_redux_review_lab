import React from 'react'



const CommentCard = (props) => {

  return (
    <div>
      <p>{props.content}</p>
      <h4>{props.author}</h4>
    </div>
    )
}

export default CommentCard