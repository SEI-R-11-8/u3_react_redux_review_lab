import React from 'react'
import '../styles/index.css'

const PostCard = (props) => {
   
    return (
        <div className="post-card">
            <div className="post">
                {props.post_location} 
                <img src={props.post_image} width={100} height={100} alt="" />  
            </div>
        </div>
    )
}

export default PostCard