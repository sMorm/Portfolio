import React from 'react';

// Media
import ballot from '../media/project_1.png';
import mimic from '../media/project_2.png';
import poker from '../media/project_3.png';
import rest from '../media/project_4.png';

const ProgrammingMobile = () => {
  return (
      <div className="portfolioContainer">

        <div className="optionContainer mobile">
          <img src={ballot} alt="option 1"/>
          <h1>Ballot</h1>
          <p>A web/mobile application built around various API's to help a group of users make quick decisions based on real time data</p>
          <p>Currently in progress <a href='http://sereymorm.com/ballot' className='linkStyle' target='_blank'>here</a></p>
        </div>

        <div className="optionContainer mobile">
          <img src={rest} alt="option 1"/>
          <h1>RESTful</h1>
          <p>An API that acts as a reverse proxy to make requests to Yelp without authentication. Implemented for testing purposes.</p>
          <p>Deployed on  <a href='https://ballotyelp.herokuapp.com/' className='linkStyle' target='_blank'>Heroku</a></p>
        </div>

        <div className="optionContainer mobile">
          <img src={mimic} alt="option 1"/>
          <h1>Mimic</h1>
          <p>Node.js app built with Twitter's API. Allows users to macro various functions, such as interaction upon certain actions</p>
          <p>See on <a href='https://github.com/sMorm/Mimic' className='linkStyle' target='_blank'>Github</a></p>
        </div>

        <div className="optionContainer mobile">
          <img src={poker} alt="option 1"/>
          <h1>Poker</h1>
          <p>A Poker game written in C++. Traversing through the remaining cards, the program will help the player make better decisions.</p>
          <p>See on  <a href='https://github.com/sMorm/Mimic' className='linkStyle' target='_blank'>Github</a></p>
        </div>
      </div>
  )
}

export default ProgrammingMobile;