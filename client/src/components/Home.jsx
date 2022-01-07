import React, { useEffect } from 'react'
import {connect} from "react-redux"
import { LoadCities } from '../store/actions/CityActions';



const mapStateToProps = ({ cityState }) => {
    return { cityState };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchCities: () => dispatch(LoadCities()),
    };
  };

const Home = (props) => {
    //console.log(props.cityState.cities)
   
    useEffect(()=> { 
        props.fetchCities() 
    },[])

    return (
        <div>
            <h1>Cities of the World!</h1>
            
                    {props.cityState.cities.map((cit, idx) => (
                        <div key={idx}>
                            <h1>{cit.name}</h1>
                            <img
            style={{ height: "300px" }}
            src={cit.image}
          /></div>
                    ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)