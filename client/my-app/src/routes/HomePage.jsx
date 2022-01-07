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
    getAllLocations: () => dispatch(GetAllLocations())
  }
}

function HomePage(props) {
  useEffect(()=>{
    props.getAllLocations()
  },[])
  //  console.log(state)
  return props.locationReducer.locations.map((location,index)=>(
    <div key={index} className= "location-card" onClick={()=> {
      props.history.push(`/${location._id}`)
    }}>
      <h2>{location.name}</h2>
    </div>
  ))
  
  }

export default connect(mapStateToProps, mapActionToProps)(HomePage)