// Dependencies
import React from 'react';

// Stylesheets
import './styles/Photography.css'

// Components
import Loading from './Loading'
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
        
        {this.state.toLoad > 1 
          ? <Loading />
          : (
            <div className="slideContainer">
            <p className="vsco">
              See more at&nbsp;
              <a target="_blank" href='http://vsco.co/sereymorm'>vsco</a>
            </p>
            {
              ImageArray.map((item, index) => {
                return <img src={item} key={index} alt=""/>
              })
            }
            </div>
          )
        }
      </div>
    );
  }
}

export default Photography;