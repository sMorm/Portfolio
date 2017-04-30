// Dependencies
import React from 'react';
import MediaQuery from 'react-media';
import { Motion, spring } from 'react-motion';

// Stylesheets
import './styles/Home.css';

import HomeMobile from './HomeMobile.jsx'
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
      <MediaQuery query="(max-width: 750px)">
        {matches => matches
          ? <HomeMobile />
          :  <div className="homeContainer" style={style}>
              <div className='profileContainer'>
                <div className='profileInfoStyle'>
                    <img src={profIMG} className='picStyle' alt="Profile" onLoad={this.loaded}/>
                    <h1 className='nameContainer'>Serey Morm</h1>
                    <hr/>
                    <p className='textContainer'>
                      Web & Software Developer, Photographer, Traveler
                    </p>
                </div>
              </div>
            <Social />
            </div>
          }
      </MediaQuery>
      )
    }
  }
    </Motion>
    )
  }
}


export default Home;



