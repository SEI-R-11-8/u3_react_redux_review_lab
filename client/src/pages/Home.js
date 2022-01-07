import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Top Asian Cities</span>
          <span className="heading-primary--sub">
            Expirience top destinations
          </span>
        </h1>
        <Link to="/destinations">
          <a className="btn btn--white btn--animated">Discover</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
