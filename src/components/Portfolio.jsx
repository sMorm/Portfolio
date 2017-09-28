// Dependencies
import React from 'react';
import { Motion, spring } from 'react-motion';
import { Link } from 'react-router-dom';

// Stylesheets
import Skeleton from './Skeleton.jsx'
import './styles/Portfolio.css'

// Media
import Photography from '../media/photography.png'
import Programming from '../media/programming.png'

class Portfolio extends React.Component {
  state = {
      imgLoaded: 0,
  }

  isLoading = () => {
    this.setState({ imgLoaded: this.state.imgLoaded + 1 })
  }

  render(){
    return (
      <div>
      <div style={{display: 'none'}}>
        <img src={Photography} alt="option 1" onLoad={this.isLoading} />
        <img src={Photography} alt="option 1" onLoad={this.isLoading} />
      </div>
          <Motion defaultStyle={{ x: 0, y: -20 }}
          style={{ x: spring(1), y: spring(0, {stiffness: 100, damping: 20})}}>
          {value => {
            const { x, y } = value;
            const style = {
              transform: `translateY(${y}%)`,
              opacity: x
            }
            return ( 
              <div>{
                this.state.imgLoaded > 1
                ? (
                  <div className='portfolioContainer' style={style}>
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
                : <Skeleton />
              }</div>
              )
            }
          }
          </Motion>
      </div>
    );
  }
}

export default Portfolio;