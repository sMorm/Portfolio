// Dependencies
import React from 'react';
import MediaQuery from 'react-media';
import { Link } from 'react-router-dom';


// Stylesheets
import './styles/Portfolio.css'

// Components
import Loading from './Loading';


// Media
import Photography from '../media/photography.png'

class Portfolio extends React.Component {

  constructor(){
    super();
    this.isLoading = this.isLoading.bind(this);
    this.state = {
      imgLoaded: 0,
    }
  }

  isLoading(){
    this.setState({ imgLoaded: this.state.imgLoaded + 1 })
    console.log('called')
  }

  render(){
    return (
      <div>
      <img src={Photography} alt="option 1" onLoad={this.isLoading} style={{width: 0.001}}/>
      <img src={Photography} alt="option 1" onLoad={this.isLoading} style={{width: 0.001}}/>
      <MediaQuery query="(max-width: 750px)">
        {matches => matches
          ? <p> mobile </p>
          : <div>{
            this.state.imgLoaded > 1 
            ? (
              <div className='portfolioContainer'>
                <Link to='/portfolio/programming'>
                  <div className="optionContainer">
                    <img src={Photography} alt="option 1" onLoad={this.isLoading}/>
                    <h1>Programming</h1>
                    <p>A collection of my work ranging from street and cityscape photographies to my travels.</p>
                    <p>See more at . . .</p>
                  </div>
                </Link>
                
                <Link to='/portfolio/photography'>
                  <div className="optionContainer">
                    <img src={Photography} alt="option 1" onLoad={this.isLoading}/>
                    <h1>Photography</h1>
                    <p>A collection of my work ranging from street and cityscape photographies to my travels.</p>
                    <p>See more at . . .</p>
                  </div>
                </Link>
              </div>
            )
            : <Loading />
          }</div>
        }
          </MediaQuery>
      </div>
    );
  }
}



export default Portfolio;