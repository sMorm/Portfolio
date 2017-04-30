import React from 'react';

const MailForm = (props) => {
  return(
    <form onSubmit={props.onSubmit}>
      <input 
      type="text" 
      name="sender" 
      onChange={props.onChange} 
      placeholder="Name"
      required
      autoComplete="off"/>
      <input 
      type="email" 
      name="address" 
      onChange={props.onChange} 
      placeholder="E-mail"
      required
      autoComplete="off"/>
      <input 
      type="text" 
      name="subject" 
      onChange={props.onChange} 
      placeholder="Subject"
      required
      autoComplete="off"/>
      <textarea 
      type="text" 
      name="text"
      onChange={props.onChange} 
      placeholder="Message"
      required
      autoComplete="off"/>
      <button>Send</button>
    </form> 
  )
}

export default MailForm