import React from 'react';

import './styles/Social.css'

const s3bucket = 'https://s3.amazonaws.com/sereymorm.com/media/'

const Social = () => {
  return (
    <div className="bioContainer logos">
      <h1>Social</h1>
      <hr/>
        <div className="bioLogos">
        <a href="https://github.com/sMorm" target="_blank">
          <img src={`${s3bucket}github.png`} alt="Github logo"/>
        </a>
        <a href="https://www.linkedin.com/in/sereymorm" target="_blank">
          <img src={`${s3bucket}linkedin.png`} alt="LinkedIn logo"/>
        </a>
        <a href="https://stackoverflow.com/users/3411861/serey/" target="_blank">
          <img src={`${s3bucket}stackoverflow.png`} alt="stackoverflow logo"/>
        </a>
        </div>
    </div>
  )    
}

export default Social;