
import img1 from '../media/image1.jpg'
import img2 from '../media/image2.jpg'
import img3 from '../media/image3.jpg'
import img4 from '../media/image4.jpg'
import img5 from '../media/image5.jpg'
import img6 from '../media/image6.jpg'
import img7 from '../media/image7.jpg'
import img8 from '../media/image8.jpg'
import img9 from '../media/image9.jpg'
import shuffle from 'shuffle-array';

const Portraits = [ 
  { src: img2 }, 
  { src: img3 }, 
  { src: img4 }, 
  { src: img5 }, 
  { src: img6 }, 
  { src: img7 }, 
  { src: img8 }, 
  { src: img9 }
] 

const Landscapes = [
  { src: img1 }
]

shuffle(Portraits)


const Theme = {
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

export default { Portraits, Landscapes, Theme }
// export default imgArray;