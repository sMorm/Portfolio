// Dependencies
import React from 'react';
import MediaQuery from 'react-media';

// Stylesheets
import './styles/Home.css';

import HomeMobile from './HomeMobile'
import Social from './Social'

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
      <MediaQuery query="(max-width: 750px)">
        {matches => matches
          ? <HomeMobile />
          :  <div className="homeContainer">
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
  ); 
  }

}



export default Home;