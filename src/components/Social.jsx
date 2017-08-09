import React from 'react';

import GITHUB from '../media/github.png'
import LINKEDIN from '../media/linkedin.png'
import STACKOVERFLOW from '../media/stackoverflow.png'
import './styles/Social.css'
const Social = () => {
  return (

    <div className="bioContainer logos">
      <h1>Social</h1>
      <hr/>
        <div className="bioLogos social">
        <a href="https://github.com/sMorm" target="_blank">
          <img src={GITHUB} alt="Github logo"/>
        </a>
        <a href="https://www.linkedin.com/in/sereymorm" target="_blank">
          <img src={LINKEDIN} alt="LinkedIn logo"/>
        </a>
        <a href="https://stackoverflow.com/users/3411861/serey/" target="_blank">
          <img src={STACKOVERFLOW} alt="stackoverflow logo"/>
        </a>
        </div>
    </div>
  );    
}

export default Social;

    // <div className="socialContainer">
    //   <a href='https://github.com/sMorm' target='_blank' >
    //     <img src={Github}  alt='GitHub'/>
    //   </a>
    //   <a href='https://linkedin.com/in/sereymorm' target='_blank'>
    //     <img src={Linkedin}  alt='GitHub'/>
    //   </a>
    // </div>