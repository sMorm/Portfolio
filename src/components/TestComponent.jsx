import React from 'react';
import Lightbox from 'react-images';

// Media
import ImageArray from './ImageArray'

class TestComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      lightboxIsOpen: true,
      currentImage: 0
    }
    this.closeLightbox = this.closeLightbox.bind(this);
  }
  closeLightbox(){
    this.setState({
      lightboxIsOpen: !this.state.lightboxIsOpen
    })
  }
  render(){
    return (
      <div>
      <Lightbox
        images={[{ src: ImageArray[this.state.currentImage] }]}
        isOpen={this.state.lightboxIsOpen}
        onClose={this.closeLightbox}
      />
      </div>
    )
  }
}

export default TestComponent;