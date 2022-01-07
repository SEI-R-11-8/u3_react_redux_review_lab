import React from 'react'

const LocationCard = (props) => {
  
  return (
      
    <div className="location-card" onClick={props.onClick}>
        <img className = 'img' src={props.img} alt="Game"/> 
      <div className="info-wrapper flex-row space">
        <h3>{props.name} {props.description} {props.comments}</h3>
      </div>
    </div>
    
  )
}

export default LocationCard