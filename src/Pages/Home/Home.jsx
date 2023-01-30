import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <img
          src={require('./Screen Shot 2023-01-04 at 5.57.37 AM.png')}
          alt="ChylMusic Banner"
          className="banner-img"
        />
        <div className="banner-text">
          <h1>ChylMusic</h1>
          <h2>Singer, Songwriter, and Musician</h2>
        </div>
      </div>
      <div className="home-links">
        <Link to="/biography" className="home-link">
          <div className="link-text">
            <h3>Biography</h3>
            <p>Learn more about ChylMusic's journey as a musician</p>
          </div>
        </Link>
        <Link to="/upcoming-shows" className="home-link">
          <div className="link-text">
            <h3>Upcoming Shows</h3>
            <p>See where ChylMusic is performing next</p>
          </div>
        </Link>
        <Link to="/music" className="home-link">
          <div className="link-text">
            <h3>Music</h3>
            <p>Listen to ChylMusic's latest tracks and albums</p>
          </div>
        </Link>
        <Link to="/gallery" className="home-link">
          <div className="link-text">
            <h3>Gallery</h3>
            <p>View photos of ChylMusic's performances and events</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
