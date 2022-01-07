import React from 'react'
import CommentCard from './CommentCard'
import AddComment from './LocationComments'

const LocationCard = (props) => {
  
  return (
      
    <div className="location-card" >
      <div className="info-wrapper flex-row space" onClick={props.onClick}>
        <h3>{props.name} {props.description} <br/> </h3>
        <img className = 'img' src={props.img} alt="image"/> 
        </div>
        <div>
        <AddComment
        id = {props.id}/>
      </div>
    </div>
    
    
  )
}

export default LocationCard