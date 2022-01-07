import React, {useEffect} from 'react'
import {connect} from "react-redux"
import { useParams } from 'react-router-dom'
import { LoadCityByID } from '../store/actions/CityActions'

const mapStateToProps = ( {cityState}) => {
    return { cityState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCity: (id) => dispatch(LoadCityByID(id))
    }
}

const CityDetail = (props) => {
    
    let {id} = useParams()
    //console.log(id)
    //console.log(props.cityState.city)

    useEffect(()=> {
        props.fetchCity(id)
    },[])

    return (
        <div>
            <h1>City Details</h1>
            <h2>{props.cityState.city.name}</h2>
            <img style={{ height: "200px" }}src={props.cityState.city.image}/>
            <p>Likes: {props.cityState.city.likes}</p>
          
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CityDetail)