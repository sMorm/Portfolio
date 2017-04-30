// Dependencies
import React from 'react';
import { Motion, spring } from 'react-motion';

// Media
import ImageArray from './ImageArray'

class PhotographyMobile extends React.Component {
  constructor() {
    super();
    this.nextImg = this.nextImg.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      imgIndex: 0,
      isLoading: true,

    }
  }
  nextImg(val){
    this.setState({ isLoading: !this.state.isLoading })
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
          <div>
            <div className="slideContainer">
            <img src={ImageArray[this.state.imgIndex]} alt="" style={{height:1}} onLoad={this.handleLoad}/>
              <button onClick={() => this.nextImg('prev')} className="slideButton mobile">&lt;</button>
                 <Motion 
                  defaultStyle={{x: 1.1, y: 0.25}} 
                  style={{x: spring(1), y: spring(1, {stiffness: 75})}}>
                    {value =>{
                      const { x, y } = value;
                      let style = {
                        transform: `scale(${x})`,
                        opacity: y,
                      }
                      return <img src={ImageArray[this.state.imgIndex]} style={style}  alt="" className="slideImg mobile" onLoad={this.handleLoad}/>
                     }
                    }
                  </Motion>
              <button onClick={() => this.nextImg('next')} className="slideButton mobile">&gt;</button>
            </div>
          </div>
    );
  }
}


export default PhotographyMobile;