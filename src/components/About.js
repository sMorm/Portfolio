import React from 'react';
import { Motion, spring } from 'react-motion'

import './styles/App.css'
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
    <div className="tempBlock" style={style}>
      <h1>Under Construction. Check back soon!</h1>
    </div>
    )
  }
}
</Motion>

  );
}

export default About;