import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import { GetAllLocations } from '../store/actions/LocationActions'


const mapStateToProps =  (state) =>{
  return {
    locationReducer: state.locationReducer
  }
}

const mapActionToProps = (dispatch) =>{
  return{
    getAllLocations: () => dispatch(GetAllLocations)
  }
}

function HomePage(props) {
  useEffect(()=>{
    props.getAllLocations()
  },[])

  return(
    <div>
    {props.locationReducer.map((location,index)=>(
      <p key={index}>{location.name} </p>
    ))}
  </div>
  )}

export default connect(mapStateToProps, mapActionToProps)(HomePage)