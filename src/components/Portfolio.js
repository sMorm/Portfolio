// Dependencies
import React from 'react';
import MediaQuery from 'react-media';
import { Link } from 'react-router-dom';


// Stylesheets
import './styles/Portfolio.css'

// Components
import Loading from './Loading';
import PortfolioMobile from './PortfolioMobile';


// Media
import Photography from '../media/photography.png'
import Programming from '../media/programming.png'

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
  }

  render(){
    return (
      <div>
      <img src={Photography} alt="option 1" onLoad={this.isLoading} style={{width: 0.001}}/>
      <img src={Photography} alt="option 1" onLoad={this.isLoading} style={{width: 0.001}}/>
      <MediaQuery query="(max-width: 750px)">
        {matches => matches
          ? <PortfolioMobile />
          : <div>{
            this.state.imgLoaded > 1 
            ? (
              <div className='portfolioContainer'>
                <Link to='/portfolio/programming'>
                  <div className="optionContainer">
                    <img src={Programming} alt="placeholder" onLoad={this.isLoading}/>
                    <h1>Programming</h1>
                    <p>Some of the applications that I've worked on. Consists of side-projects and work from my studies.</p>
                  </div>
                </Link>
                
                <Link to='/portfolio/photography'>
                  <div className="optionContainer">
                    <img src={Photography} alt="shot by me" onLoad={this.isLoading}/>
                    <h1>Photography</h1>
                    <p>A collection of my work ranging from street and cityscape photographies to my travels.</p>
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