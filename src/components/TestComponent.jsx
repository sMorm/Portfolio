import React from 'react';
import Lightbox from 'react-images';

// Media
import ImageArray from './ImageArray'

class TestComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      lightboxIsOpen: false,
      currentImage: null
    }
    this.closeLightbox = this.closeLightbox.bind(this);
  }
  closeLightbox(){
    this.setState({
      lightboxIsOpen: !this.state.lightboxIsOpen
    })
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render(){
    return (
      <div>
      <Lightbox
        currentImage={this.state.currentImage}
        images={[{ src: ImageArray[this.state.currentImage] }]}
        isOpen={this.state.lightboxIsOpen}
        onClose={this.closeLightbox}
      />
      </div>
    )
  }
}

export default TestComponent;