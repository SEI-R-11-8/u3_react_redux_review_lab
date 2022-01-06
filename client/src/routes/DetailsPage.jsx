import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { GetLocationById } from '../store/actions/LocationActions'

const mapStateToProps = (state) => {
  return {
    locationReducer: state.locationReducer
  }
}

const mapActionsToProps = (dispatch ) => {
  return {
    getLocationById: (id) => dispatch(GetLocationById(id))
  }
}
function DetailsPage(props) {

  useEffect(()=> {
    props.getLocationById(props.match.params.locationId)
  }, [props.match.params.locationId])
  return (
    <div>

    </div>
  )
}
export default connect(mapStateToProps,mapActionsToProps)(DetailsPage)