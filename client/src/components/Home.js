import React, {useEffect } from 'react'
import { LoadDestinations } from '../store/actions/DestinationAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const mapStateToProps = ({ destinationState }) => {
    return { destinationState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDestinations: () => dispatch(LoadDestinations())
    }
}

const Home = (props) => {

    useEffect(() => {
        props.fetchDestinations()
    }, [])
    
    return (
        <div>
            this is home
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
