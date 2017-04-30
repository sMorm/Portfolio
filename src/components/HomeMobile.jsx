// Dependencies
import React from 'react';

// Stylesheets
import './styles/HomeMobile.css';

// Components
import Social from './Social.jsx';

const profImg = 'http://i.imgur.com/quMB1Sh.png';


const Home = () => {
  return (
    <div>
      <div className="hmContainer">
        <img src={profImg} alt="Profile"/>
        <h1 className="hmName">Serey Morm</h1>
        <hr/>
        <p className="hmParagraph">Web & Software Developer, Photographer, Traveler</p>
      </div>
    <Social />
    </div>
  ); 
}

export default Home;