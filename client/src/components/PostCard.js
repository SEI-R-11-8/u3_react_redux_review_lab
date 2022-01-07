import React from 'react'
import '../styles/index.css'

const PostCard = (props) => {
   
    return (
        <div className="post-card">
            <div className="post">
                <h3>{props.post_location} </h3>
                <img src={props.post_image} width={100} height={100} alt="" /> 
                <p>{props.post_description}</p> 
            </div>
        </div>
    )
}

export default PostCard