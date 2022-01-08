import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LoadDestinations, LoadDestinationById } from '../store/actions/DestinationActions'
import { connect } from 'react-redux'

const mapStateToProps = ({ destinationState }) => {
    return { destinationState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDestinations: () => dispatch(LoadDestinations())
    }
}

function DisplayDestinations(props) {



    useEffect(() => {
        props.fetchDestinations()
    }, [])
    return (
        <div>
            <h1>Some Fun Destinations:</h1>

            <ul >
                {props.destinationState.destinations &&
                props.destinationState.destinations.map((destination) => (
                    <li key={destination._id}>
                        <h2>{destination.name}</h2>
                        <img src={`${destination.image}`} alt={destination.name} />
                        <h4>{destination.description}</h4>
                        <Link to={`/details/${destination._id}`}>Click here to see reviews about {destination.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayDestinations)
