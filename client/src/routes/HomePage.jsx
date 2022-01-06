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
    getAllLocations: () => dispach(GetAllLocations)
  }
}

function HomePage(props) {

  useEffect(()=> {
    props.getAllLocations()
  }, [])

  return (
    <div>
    {props.locationReducer.locations.map((location, index)=> (
      <p key={index}>{location.name}</p>
    ))}
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(HomePage)