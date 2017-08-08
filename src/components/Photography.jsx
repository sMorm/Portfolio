// Dependencies
import React from 'react';
import Lightbox from 'react-images';

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
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.state = {
      toLoad: ImageArray.length,
      currentImage: 0,
      lightboxIsOpen: false
    }
  }

  handleLoad() {
    this.setState({ toLoad: this.state.toLoad - 1})
  }
  handleClickImage() {
    if (this.state.currentImage === ImageArray.length - 1) return;

    this.gotoNext();
  }
  openLightbox(index) {
    this.setState({
      lightboxIsOpen: true,
      currentImage: index
    })
  }
  closeLightbox(){
    this.setState({
      lightboxIsOpen: false
    })
  }
  gotoPrevious(){
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }
  gotoNext(){
    this.setState({
      currentImage: this.state.currentImage + 1 
    })
  }
  render(){
    const theme = {
  // container
  container: {
    background: 'rgba(255, 255, 255, 0.9)',
  },

  // arrows
  arrow: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fill: '#222',
    opacity: 0.6,
    transition: 'opacity 200ms',

    ':hover': {
      opacity: 1,
    },
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 40,
    marginTop: -20,

    '@media (min-width: 768px)': {
      height: 70,
      padding: 15,
    },
  },
  arrow__direction__left: { marginLeft: 10 },
  arrow__direction__right: { marginRight: 10 },
  close: {
    fill: '#D40000',
    opacity: 0.6,
    transition: 'all 200ms',
    ':hover': {
      opacity: 1,
    },
  },

  // footer
  footer: {
    color: 'black',
  },
  footerCount: {
    color: 'rgba(0, 0, 0, 0.6)',
  },

  // thumbnails
  thumbnail: {
  },
  thumbnail__active: {
    boxShadow: '0 0 0 2px #00D8FF',
  },
};
    return (
      <div>
        {
          ImageArray.map((item, index) => {
            return <img src={item.src} key={index} alt="" onLoad={this.handleLoad} style={{display: 'none'}}/>
          })
        }
        <div className="photographyHeader">
          <h1>Photography</h1>
          <hr />
          <p>Picking up the camera is a therapeutic way for me to relieve stress and provides another platform that allows me to create. Here are some of my favorite shots.</p>
        </div>
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
              ImageArray.map((item, index) => {
                return <img src={item.src} key={index} alt="" onClick={() => this.openLightbox(index) }/>
              })
            }
            <Lightbox 
              images={ImageArray}
              currentImage={this.state.currentImage}
              onClickImage={this.handleClickImage}
              isOpen={this.state.lightboxIsOpen}
              onClose={this.closeLightbox}
              onClickNext={this.gotoNext}
              onClickPrev={this.gotoPrevious}
              theme={theme}
             />
            </div>
          )
        }
      </div>
    );
  }
}

export default Photography;