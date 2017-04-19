import React from 'react';
import { Link } from 'react-router-dom';

// Media
import Photography from '../media/photography.png'
import Programming from '../media/programming.png'

const PortfolioMobile = () => {
  return (
    <div className='portfolioContainer'>
      <Link to='/portfolio/programming'>
        <div className="optionContainer mobile">
          <img src={Programming} alt="placeholder" />
          <h1>Programming</h1>
          <p>Some of the applications that I've worked on. Consists of side-projects and work from my studies.</p>
        </div>
      </Link>
      
      <Link to='/portfolio/photography'>
        <div className="optionContainer mobile">
          <img src={Photography} alt="shot by me" />
          <h1>Photography</h1>
          <p>A collection of my work ranging from street and cityscape photographies to my travels.</p>
        </div>
      </Link>
    </div>
  )
}

export default PortfolioMobile;