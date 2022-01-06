import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetAllLocations } from '../store/actions/LocationActions'

const mapStateToProps = (state) => {
  return {
    locationReducer: state.locationReducer
  }
}

const mapActionsToProps = (dispach) => {
  return {
    getAllLocations: () => dispach(GetAllLocations())
  }
}

function HomePage(props) {

  useEffect(()=> {
    props.getAllLocations()
  }, [])

  return props.locationReducer.locations.map((location, index)=> (
      <div key={index} className= "location-card" onClick={()=> {
        props.history.push(`/${location._id}`)
      }}>
        <h2>{location.name}</h2>
      </div>
    ))
}

export default connect(mapStateToProps, mapActionsToProps)(HomePage)