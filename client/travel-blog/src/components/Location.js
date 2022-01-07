import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadLocations } from '../store/actions/LocationActions'
import LocationCard from './LocationCard'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations())

  }
}

const Locations = (props) => {

  useEffect(() => {
    props.fetchLocations()
  }, [])


  return (
    <div>
        <h1>Hi there!</h1>
      {props.locationState.locations.map((location) => (

 
            <LocationCard 
            key={location.id}
            onClick= {()=> props.history.push(`/locations/${location._id}`)}
            img = {location.image}
            name = {location.name}
            comments = {location.comments}
            />     
        
      ))}
      
    </div>
  )
}
    
      
export default connect(mapStateToProps, mapDispatchToProps)(Locations)