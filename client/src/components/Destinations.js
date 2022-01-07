import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoadDestinations } from '../store/actions/DestinationsActions'

const mapStateToProps = (state) => {
    return {
        DestinationsState: state.DestinationsState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDestinations: () => (dispatch(LoadDestinations()))
    }
}

const Destinations = (props) => {

    useEffect(() => {
        props.fetchDestinations()
    }, [])

    return (
        <div className='destinations'>
            {
                props.DestinationsState.destinations.map((destination) => {
                    return (
                        <div key={destination._id}>
                            <Link to={`/posts/${destination._id}`}><h1>{destination.name}</h1></Link>
                            <img src={destination.image} alt='destination picture' />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Destinations)