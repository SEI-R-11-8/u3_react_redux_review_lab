import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { LoadDestinationsById } from '../store/actions/DestinationAction'
import { useParams } from 'react-router-dom'


const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetails: (id) => dispatch(LoadDestinationsById(id))
    }
}

const mapStateToProps = (destinationState) => {
    return { destinationState }
}

const Details = (props) => {

    // console.log(props)
    // console.log(props.destinationState.destinationState.details)
    // console.log(props.destinationState.destination)

    const { id } = useParams()

    useEffect(() => {
        props.fetchDetails(id)
    }, [id])

    
    return (
        <div>
            {/* {props.destinationState} */}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)