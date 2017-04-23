import React from 'react';
import { Motion, spring } from 'react-motion'
import { Link } from 'react-router-dom';

import './styles/About.css'

const About = () => {
  return(
    <Motion defaultStyle={{ x: 0, y: -20 }}
    style={{ x: spring(1), y: spring(1, {stiffness: 100, damping: 8})}}>
    {value => {
      const { x, y } = value;
      const style = {
        transform: `translateY(${y}%)`,
        opacity: x
      }
      return ( 
    <div className="bioContainer" style={style}>
      <h1>About Me</h1>
      <hr/>
      <p>Currently under construction. Meanwhile, check out some of my work in the portfolio portal.</p>
      <Link to='/portfolio' className='tempLink'>To Portfolio 🏞</Link>
    </div>
    )
  }
}
</Motion>

  );
}

export default About;