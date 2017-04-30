// Dependencies
import React from 'react';
import { Motion, spring } from 'react-motion';
import { ChasingDots } from 'better-react-spinkit';
import MediaQuery from 'react-media';
import axios from 'axios'

// Components
import Social from './Social.jsx'
import MailForm from './MailForm.jsx'

// Stylesheets
import './styles/Contact.css'

// API Endpoints
const baseURL = 'http://sample-env.5qpmzezbye.us-east-1.elasticbeanstalk.com/send/'

class Contact extends React.Component {
  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state ={
      sender: '',
      address: '',
      subject: '',
      text: '',
      didSend: false,
      failedToSend: false,
      isSending: false,
    }
  }

  onSubmit(event){
    event.preventDefault();
    this.setState({ isSending: true })
    const { sender, address, subject, text } = this.state
    axios.get(`${baseURL}${sender}/${address}/${subject}/${text}`)
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

  onChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render(){
    return(
      <MediaQuery query="(max-width: 750px)">
        {matches => matches
          ? 
          <div className="mail-mobile" >
          {this.state.isSending ? <h1>Sending</h1> : <h1>Message</h1>}
          {
            this.state.didSend
            ? <div className="mobile-status sent">Sent!</div>
            : (this.state.isSending
              ? <div className="sending-mobile">
                  <ChasingDots size={25} color='orange'/>
                </div>
              :
              <form onSubmit={this.onSubmit}>
                <input 
                type="text" 
                name="sender" 
                onChange={this.onChange} 
                placeholder="Name"
                required
                autoComplete="off"/>
                <input 
                type="email" 
                name="address" 
                onChange={this.onChange} 
                placeholder="E-mail"
                required
                autoComplete="off"/>
                <input 
                type="text" 
                name="subject" 
                onChange={this.onChange} 
                placeholder="Subject"
                required
                autoComplete="off"/>
                <textarea 
                type="text" 
                name="text"
                onChange={this.onChange} 
                placeholder="Message"
                required
                autoComplete="off"/>
                <p style={{textAlign: 'center'}}>
                <button>Send</button>
                </p>
              </form> 
            )
          }
          </div>
          : 
          <Motion defaultStyle={{ x: 0, y: -20 }}
          style={{ x: spring(1), y: spring(0, {stiffness: 100, damping: 10})}}>
          {value => {
            const { x, y } = value;
            const style = {
              transform: `translateY(${y}%)`,
              opacity: x
            }
            return ( 
            <div style={style}>
              <div className="mailContainer" >
              {this.state.isSending ? <h1>Sending...</h1> : <h1>Message</h1>}
                {
                  this.state.didSend
                  ? <div className="status sent">Successfully delivered message!</div>
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
      }
      </MediaQuery>
    );
  }
}

export default Contact;