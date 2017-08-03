import React, { Component } from 'react';

import './styles/ContactCard.css';

import Mail from '../media/mail.svg'

class ContactCard extends Component {
  render() {
    return (
      <div className="ContactCardContainer">
        <div className="nameBubble">
          <h1>SM</h1>
        </div>
        <div className="contactInfo">
          x
        </div>

        <div style={{height: 100}}/>
      
        <div className="nameBubble">
          <img src={Mail} alt=""/>
        </div>
        <div className="contactInfo">
          x
        </div>

        <div style={{height: 100}}/>
        
      </div>

    );
  }
}

export default ContactCard;