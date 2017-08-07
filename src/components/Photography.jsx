// Dependencies
import React from 'react';

// Stylesheets
import './styles/Photography.css'

// Components
import Loading from './Loading'
import TestComponent from './TestComponent.jsx';

// Media
import ImageArray from './ImageArray'

class Photography extends React.Component {
  constructor() {
    super();
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      toLoad: ImageArray.length
    }
  }

  handleLoad() {
    this.setState({ toLoad: this.state.toLoad - 1})
  }
  render(){
    return (
      <div>
        {
          ImageArray.map((item, index) => {
            return <img src={item} key={index} alt="" onLoad={this.handleLoad} style={{display: 'none'}}/>
          })
        }
        <div className="photographyHeader">
          <h1>Photography</h1>
          <hr />
          <p>Picking up the camera is a therapeutic way for me to relieve stress and provides another platform that allows me to create. Here are some of my favorite shots.</p>
        </div>
        <TestComponent />
        {this.state.toLoad > 1 
          ? <Loading />
          : (
            <div className="slideContainer">
            <p className="vsco">
              See more at&nbsp;
              <a target="_blank" href='http://vsco.co/sereymorm'>vsco</a>
              &nbsp;and&nbsp;
              <a target="_blank" href='http://instagram/sereymorm'>instagram</a>
            </p>
            {
              // ImageArray.map((item, index) => {
              //   return <img src={item} key={index} alt=""/>
              // })
            }
            </div>
          )
        }
      </div>
    );
  }
}

export default Photography;