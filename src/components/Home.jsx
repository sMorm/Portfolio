// Dependencies
import React from 'react';
import { Motion, spring } from 'react-motion';

// Stylesheets
import './styles/Home.css';

// Components
import Social from './Social.jsx'

const profIMG = 'http://i.imgur.com/quMB1Sh.png';

class Home extends React.Component {
  constructor(){
    super();
    this.loaded = this.loaded.bind(this)
    this.state = {
      isLoaded: false
    }
  }

  loaded() {
    this.setState({
      isLoaded: true
    })
  }
  render(){
    return (
    <Motion defaultStyle={{ x: 0, y: -20 }}
    style={{ x: spring(1), y: spring(0, {stiffness: 100, damping: 20})}}>
    {value => {
      const { x, y } = value;
      const style = {
        transform: `translateY(${y}%)`,
        opacity: x
      }
      return ( 
        <div className="homeContainer" style={style}>
          <div className='profileContainer'>
            <img src={profIMG} alt="Profile" onLoad={this.loaded}/>
            <h1>Serey Morm</h1>
            <hr/>
            <p>
              Web & Software Developer, Photographer, Traveler
            </p>
          </div>
        <Social />
        </div>
      )
    }
  }
    </Motion>
    )
  }
}


export default Home;



