// Dependencies
import React from 'react';
import Lightbox from 'react-images';

// Stylesheets
import './styles/Photography.css'

// Components
import Loading from './Loading'

// Media
import GalleryHelper from './GalleryHelper'

class Photography extends React.Component {
  state = {
      currentImage: 0,
      lightboxIsOpen: false,
      currentGenre: "Portraits",
      isLoading: true,
      isLeaving: "galleryImage",
      toLoad: GalleryHelper["Portraits"].length,
  }

  handleLoad = () => {
    this.setState({ toLoad: this.state.toLoad - 1})

    if (this.state.toLoad === 0) return;

    this.setState({ isLoading: false, isLeaving: "galleryImage enter" })
  }

  handleClickImage = () => {
    if (this.state.currentImage === GalleryHelper.length - 1) return;
    this.gotoNext();
  }

  openLightbox = (index) => {
    this.setState({
      lightboxIsOpen: true,
      currentImage: index
    })
  }

  closeLightbox = () => {
    this.setState({ lightboxIsOpen: false })
  }

  gotoPrevious = () => {
    this.setState({ currentImage: this.state.currentImage - 1 })
  }

  gotoNext = () => {
    this.setState({ currentImage: this.state.currentImage + 1 })
  }

  gotoImage = (index) => {
    this.setState({ currentImage: index });
  }

  gotoGenre = (genre) => {
    if (genre === this.state.currentGenre) return;
    this.setState({ 
      isLeaving: "galleryImage leave",
    });
    setTimeout(() => {
      this.setState({ 
        isLoading: true
      })
    }, 500)
    setTimeout(() => {
      this.setState({ 
        currentGenre: genre,
        toLoad: GalleryHelper[genre].length
      })
    }, 1000)
  }

  render(){

    let currentGenre = GalleryHelper[this.state.currentGenre];

    return (
      <div>
        {
          currentGenre.map((item, index) => {
            return <img src={item.src} key={index} alt="" onLoad={this.handleLoad} style={{display: 'none'}}/>
          })
        }
        <div className="photographyHeader">
          <h1>Photography</h1>
          <hr />
          <p>Being able to create, whether it's an app, user-interface, or photo, I see it as visual poetry. It's brings pure joy to me when I'm able to create something so pleasing to the eyes simply out of nothing. </p> 
          <p>Here's out some of my work . . .</p>
        </div>
        <p className="vsco">
          Find me on&nbsp;
          <a target="_blank" href='http://vsco.co/sereymorm'>vsco</a>
          &nbsp;and&nbsp;
          <a target="_blank" href='http://instagram.com/sereymorm'>instagram</a>
        </p>
        <ul className={"galleryGenre"}>
          <li onClick={() => this.gotoGenre("Portraits")}>Portraits</li>
          <li onClick={() => this.gotoGenre("Travel")}>Travel</li>
          <li onClick={() => this.gotoGenre("Street")}>Street</li>
        </ul>
        {this.state.isLoading
          ? <Loading />
          : (
            <div className="galleryContainer">
            {
              currentGenre.map((item, index) => {
                return <img className={this.state.isLeaving} src={item.src} key={index} alt="" onClick={() => this.openLightbox(index) }/>
              })
            }
            <Lightbox 
              images={currentGenre}
              currentImage={this.state.currentImage}
              onClickImage={this.handleClickImage}
              isOpen={this.state.lightboxIsOpen}
              onClose={this.closeLightbox}
              onClickNext={this.gotoNext}
              onClickPrev={this.gotoPrevious}
              onClickThumbnail={this.gotoImage}
              showThumbnails={true}
              theme={GalleryHelper.Theme}
             />
            </div>
          )
        }
      </div>
    );
  }
}

export default Photography;