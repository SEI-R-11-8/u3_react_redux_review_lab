import React from 'react'
import LocationCard from './LocationCard'

const CommentCard = (props) => {
  
  return (
      
    <div className="location-card" onClick={props.onClick}> 
      <div className="info-wrapper flex-row space">
        <h3>{props.name}:  "{props.comment}"</h3>
      </div>
    </div>
    
  )
}

export default CommentCard