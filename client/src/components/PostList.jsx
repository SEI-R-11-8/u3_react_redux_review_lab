import React from 'react'

const PostList = (props) => {

  return (
    <div>
      {props.posts.map((element, index) => 
        <div key={index}>
          <img src={element.photo} alt=""/>
          <p>{element.city}</p>
          <p>{element.date}</p>
          <p>{element.description}</p>
          <p>Likes: {element.likes}</p>
        </div>
      )}
    </div>
  )
}

export default PostList
