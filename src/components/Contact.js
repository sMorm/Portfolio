import React from 'react';
import { Motion, spring } from 'react-motion';
import MediaQuery from 'react-media';
import axios from 'axios'

import Social from './Social'

import './styles/Contact.css'
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
      failedToSend: false
    }
  }

  onSubmit(event){
    event.preventDefault();
    const { sender, address, subject, text } = this.state
    axios.get(`https://nodemails.herokuapp.com/send/${sender}/${address}/${subject}/${text}`)
    .then(response => {
      if(response.data.response === 'sent'){
        this.setState({didSend: !this.state.didSend})
      }
      else {
        this.setState({ failedToSend: true })
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
          <h1>Message</h1>
          <form onSubmit={this.onSubmit}>
            <input 
            type="text" 
            name="sender" 
            onChange={this.onChange} 
            placeholder="Name"
            required/>
            <input 
            type="email" 
            name="address" 
            onChange={this.onChange} 
            placeholder="E-mail"
            required/>
            <input 
            type="text" 
            name="subject" 
            onChange={this.onChange} 
            placeholder="Subject"
            required/>
            <textarea 
            type="text" 
            name="text"
            onChange={this.onChange} 
            placeholder="Message"
            required/>
            {this.state.didSend
              ? <button className="sent">sent!</button>
              :(
                <button>send</button>)
            }
          </form> 
          
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
          <h1>Message</h1>
          <form onSubmit={this.onSubmit}>
            <input 
            type="text" 
            name="sender" 
            onChange={this.onChange} 
            placeholder="Name"
            required/>
            <input 
            type="email" 
            name="address" 
            onChange={this.onChange} 
            placeholder="E-mail"
            required/>
            <input 
            type="text" 
            name="subject" 
            onChange={this.onChange} 
            placeholder="Subject"
            required/>
            <textarea 
            type="text" 
            name="text"
            onChange={this.onChange} 
            placeholder="Message"
            required/>
            {this.state.didSend
              ? <button className="sent">sent!</button>
              :(
                <button>send</button>)
            }
          </form> 
          
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