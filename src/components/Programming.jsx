// Dependencies
import React from 'react';
import MediaQuery from 'react-media';

// Components
import ProgrammingMobile from './ProgrammingMobile.jsx'
import Skeleton from './Skeleton.jsx'

// Media
import ballot from '../media/project_1.png';
import mimic from '../media/project_2.png';
import poker from '../media/project_3.png';
import rest from '../media/project_4.png';

class Programming extends React.Component {
  constructor(){
    super();
    this.isLoading = this.isLoading.bind(this);
    this.state = {
      imgLoaded: 0
    }
  }
  isLoading(){
    this.setState({ imgLoaded: this.state.imgLoaded + 1 })
  }
  render(){
    return (
      <div>
      <div className="photographyHeader">
        <h1>Programming</h1>
        <hr />
        <p>These are some projects that I've been working on, follow the links to see the source code or demo.</p>

        <p>For more technical information on the technology I use, see the About page!</p>
      </div>
      <div style={{display: 'none'}}>
        <img src={ballot} alt="option 1" onLoad={this.isLoading}/>
        <img src={rest} alt="option 1" onLoad={this.isLoading}/>
        <img src={mimic} alt="option 1" onLoad={this.isLoading}/>
        <img src={poker} alt="option 1" onLoad={this.isLoading}/>
      </div>
      {
        this.state.imgLoaded > 3
        ?
        <MediaQuery query="(max-width: 750px)">
          {matches => matches
            ? <ProgrammingMobile />
            :
            <div className="portfolioContainer programming">

              <div className="optionContainer">
                <img src={ballot} alt="option 1" />
                <h1>Ballot</h1>
                <p>A web/mobile application built around various API's to help a group of users make quick decisions based on real time data</p>
                <p>Currently in progress <a href='http://sereymorm.com/ballot' className='linkStyle' target='_blank'>here</a></p>
              </div>

              <div className="optionContainer">
                <img src={rest} alt="option 1" />
                <h1>RESTful</h1>
                <p>An API that acts as a reverse proxy to make requests to Yelp without authentication. Implemented for testing purposes.</p>
                <p>Deployed on  <a href='https://ballotyelp.herokuapp.com/' className='linkStyle' target='_blank'>Heroku</a></p>
              </div>

              <div className="optionContainer">
                <img src={mimic} alt="option 1" />
                <h1>Mimic</h1>
                <p>Node.js app built with Twitter's API. Allows users to macro various functions, such as interaction upon certain actions</p>
                <p>See on <a href='https://github.com/sMorm/Mimic' className='linkStyle' target='_blank'>Github</a></p>
              </div>

              <div className="optionContainer">
                <img src={poker} alt="option 1" />
                <h1>Poker</h1>
                <p>A Poker game written in C++. Traversing through the remaining cards, the program will help the player make better decisions.</p>
                <p>See on  <a href='https://github.com/sMorm/Poker' className='linkStyle' target='_blank'>Github</a></p>
              </div>
            </div>
          }
        </MediaQuery>
        : 
        <div>
          <Skeleton />
          <Skeleton />
        </div>
      }

      </div>

    );
  }
}

export default Programming;