import React, { useEffect } from 'react'
import {connect} from "react-redux"
import { LoadCities } from '../store/actions/CityActions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ cityState }) => {
    return { cityState };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchCities: () => dispatch(LoadCities()),
    };
  };

const Home = (props) => {
   
    useEffect(()=> { 
        props.fetchCities() 
    },[])

    return (
        <div>
            <h1>Cities of the World!</h1>
              {props.cityState.cities.map((cit, idx) => (
                <div key={idx}>
                  <Link to={`/details/${cit._id}`}>
                    <h1>{cit.name}</h1>
                    <img style={{ height: "300px" }}src={cit.image}/>
                    </Link>
                </div>
              ))}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)