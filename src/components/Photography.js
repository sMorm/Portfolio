// Dependencies
import React from 'react';
import MediaQuery from 'react-media';
import { Motion, spring } from 'react-motion';

// Stylesheets
import './styles/Photography.css'

// Components
import PhotographyMobile from './PhotographyMobile'

const preset = {stiffness: 150, damping: 10}


// Media
import ImageArray from './ImageArray'

class Photography extends React.Component {
  constructor() {
    super();
    this.nextImg = this.nextImg.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      imgIndex: 0,
      isLoading: true,
      imgDidLeave: false,

    }
  }
  nextImg(val){
    this.setState({ 
      isLoading: !this.state.isLoading,
      imgDidLeave: true
      })
    if (val === 'next'){
      this.state.imgIndex === ImageArray.length - 1
      ? this.setState({ imgIndex: 0 })
      : this.setState({ imgIndex: this.state.imgIndex + 1 })
    }
    else {
      if (this.state.imgIndex === 0)
        this.setState({ imgIndex: ImageArray.length - 1 })
     else
        this.setState({ imgIndex: this.state.imgIndex - 1 })
    }
  }
  handleLoad() {
    this.setState({ isLoading: false })
  }
  render(){
    return (
      <MediaQuery query="(max-width: 750px)">
        {matches => matches
          ? <PhotographyMobile/>
          :
          <div>
            <div className="slideContainer">
            <img src={ImageArray[this.state.imgIndex - 1]} alt="" style={{height:1}} onLoad={this.handleLoad}/>
            <img src={ImageArray[this.state.imgIndex]} alt="" style={{height:1}} onLoad={this.handleLoad}/>
            <img src={ImageArray[this.state.imgIndex + 1]} alt="" style={{height:1}} onLoad={this.handleLoad}/>
              <button onClick={() => this.nextImg('prev')} className="slideButton">prev</button>
              {
                this.state.isLoading
                ? <div><div className="imgLoading"><div className="triangle"/></div></div>
                : <Motion 
                  defaultStyle={{x: 0.9, y: 0}} 
                  style={{x: spring(1, preset), y: spring(1, {stiffness: 75})}}>
                    {value =>{
                      const { x, y} = value;
                      let style = {
                        transform: `scale(${x})`,
                        opacity: y
                      }
                      return <img 
                      src={ImageArray[this.state.imgIndex]} 
                      style={style}  
                      alt="" 
                      className="slideImg" 
                      onLoad={this.handleLoad}/>
                     }
                    }
                  </Motion>
                }
              <button onClick={() => this.nextImg('next')} className="slideButton">next</button>
            </div>
            <p className="vsco">See more at <a href='http://vsco.co/sereymorm'>vsco</a></p>
          </div>
        }
      </MediaQuery>

    );
  }
}

export default Photography;