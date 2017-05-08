import React from 'react';

import Github from '../media/github.png'
import Linkedin from '../media/linkedin.png'
import './styles/Social.css'
const Social = () => {
  return (
    <div className="socialContainer">
      <a href='https://github.com/sMorm' target='_blank' >
        <img src={Github}  alt='GitHub'/>
      </a>
      <a href='https://linkedin.com/in/sereymorm' target='_blank'>
        <img src={Linkedin}  alt='GitHub'/>
      </a>
    </div>
  );    
}

export default Social;