import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadDestinations } from '../store/actions/DestinationAction'




const mapDispatchToProps = (dispatch) => {
    return {
        fetchDestinations: () => dispatch(LoadDestinations())
    }
}
const mapStateToProps = ({ destinationState }) => {
    return { destinationState }
}

const Destinations = (props) => {

    // console.log(props.destinationState.destinations.destination)

    useEffect(() => {
        props.fetchDestinations()
    }, [])

    

    return(
        <div>
            these are destinations
            {props.destinationState.destinations.destination.map( (e) => (
                <div key={e._id}>
                        <Link to={`/destinations/${e._id}`}> {e.name} </Link>
                    <img src={`${e.image}`}/>
                    <div> {e.details} </div>
                    <div> <button> Like </button> {e.likes} </div>
                    <div> Comments: </div>
                    <div> Reviews: </div>
                </div>
            ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Destinations)