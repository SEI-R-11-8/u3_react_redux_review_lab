import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { LoadLocations } from '../store/actions/LocationActions'

const mapStateToProps = ({ locationState }) => {
  return { locationState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => dispatch(LoadLocations())

  }
}


const LocationDetails = (props) => {

  useEffect(() => {
    props.fetchLocations()
  }, [])

return (

    <div>
        <form >
        

        </form>
    
    </div>
      
)


}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDetails)
