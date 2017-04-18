import React from 'react';

const socialContainer = {
  marginTop: 50,
  marginBottom: 100,
  display: 'flex',
  justifyContent: 'center',
}

const logoSize = {
  height: 50,
  width: 50,
  opacity: 0.40,
  marginLeft: 30,
  marginRight: 30
}

const linkStyle = {
  cursor: 'pointer'
}

const Social = () => {
  return (
    <div style={socialContainer}>
      <a href='https://github.com/sMorm' target='_blank' style={{linkStyle}}>
        <img src='http://i.imgur.com/l5WHWSX.png' style={logoSize} alt='GitHub'/>
      </a>
      <a href='https://linkedin.com/in/sereymorm' target='_blank'>
        <img src='http://i.imgur.com/T8paDf2.png' style={logoSize} alt='GitHub'/>
      </a>
    </div>
  );    
}

export default Social;