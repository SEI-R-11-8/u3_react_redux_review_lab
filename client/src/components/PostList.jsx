import React from 'react'
import { Link } from 'react-router-dom'

const PostList = (props) => {

  return (
    <div className="post-card">
      {props.posts.map((element, index) => 
        <div key={index}>
          <Link to={`/${element._id}`}><img className="main-image" src={element.photo} alt=""/></Link>
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
