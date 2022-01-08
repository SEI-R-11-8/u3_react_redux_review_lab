import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { DelComments } from '../store/actions/LocationActions'




const mapStateToProps = ({commentState }) => {
  return { commentState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    takeComments: () => dispatch(DelComments())

  }
}

const DComments = (props) => {

onclick = () => {
  props.takeComments()
}



  return (
      
    <div className="location-card"> 
      <div className="info-wrapper flex-row space">
        <button className='delete'>delete </button>          
        <h3>{props.name}:  "{props.comment}"</h3>
      </div>
    </div>
    
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DComments)