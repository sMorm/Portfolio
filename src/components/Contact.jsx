// Dependencies
import React from 'react';
import { Motion, spring } from 'react-motion';
import { ChasingDots } from 'better-react-spinkit';
import axios from 'axios'

// Components
// import ContactCard from './ContactCard.jsx';
import MailForm from './MailForm.jsx';
import Social from './Social.jsx';

// Stylesheets
import './styles/Contact.css'

// API Endpoints
const baseURL = 'http://sample-env.5qpmzezbye.us-east-1.elasticbeanstalk.com/send/'

class Contact extends React.Component {
  state = {
    sender: '',
    address: '',
    subject: '',
    text: '',
    didSend: false,
    failedToSend: false,
    isSending: false,
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSending: true })
    const { sender, address, subject, text } = this.state
    let newText = text.replace(/\r?\n/g,'<br %2F>');
    axios.get(`${baseURL}${sender}/${address}/${subject}/${newText}`)
    .then(response => {
      if(response.data.response === 'sent'){
        this.setState({ 
          didSend: !this.state.didSend,
          isSending: false,
         })
      }
      else {
        this.setState({  didSend: false })
      }
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render(){
    return(
          <Motion defaultStyle={{ x: 0, y: -20 }}
          style={{ x: spring(1), y: spring(0, {stiffness: 100, damping: 20})}}>
          {value => {
            const { x, y } = value;
            const style = {
              transform: `translateY(${y}%)`,
              opacity: x
            }
            return ( 
            <div style={style}>
              <div className="mailContainer" >
              {this.state.isSending ? <h1>Sending...</h1> 
                : this.state.didSend ? <div></div> : <h1>Message</h1> }
                {
                  this.state.didSend
                  ? <div className="status sent">Message Delivered<hr/></div>
                  : (this.state.isSending
                    ? <ChasingDots size={50} color='orange' className="sending" />
                    : <MailForm 
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    />
                  )
                }
              </div>
              <Social/> 
            </div>
            )
          }
        }
        </Motion>
    );
  }
}

export default Contact;