import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LoadDestinations } from '../store/actions/DestinationActions'
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
            <header>
                <h1>Travel Blog</h1>
            </header>

            <h2>My latest adventures:</h2>

            <ul>
                {props.destinationState.destinations &&
                    props.destinationState.destinations.map((destination) => (
                        <li key={destination._id} className='destination_box'>
                            <img src={`${destination.image}`} alt={destination.name} />
                            <div className='details'>
                                <h2>{destination.name}</h2>
                                <h4>{destination.description}</h4>
                                <Link to={`/details/${destination._id}`}>Click here to read more about {destination.name}</Link>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayDestinations)
