//Other Dependencies
import shuffle from 'shuffle-array';

const s3bucket = 'https://s3.amazonaws.com/sereymorm.com/media/'

const Portraits = [ 
  { src: `${s3bucket}portrait1.jpg` }, 
  { src: `${s3bucket}portrait2.jpg` }, 
  { src: `${s3bucket}portrait3.jpg` }, 
  { src: `${s3bucket}portrait4.jpg` }, 
  { src: `${s3bucket}portrait5.jpg` }, 
  { src: `${s3bucket}portrait6.jpg` }, 
  { src: `${s3bucket}portrait7.jpg` }, 
  { src: `${s3bucket}portrait8.jpg` }, 
  { src: `${s3bucket}portrait9.jpg` }, 
] 

const Travel = [
  { src: `${s3bucket}travel2.jpg` },
  { src: `${s3bucket}travel1.jpg` },
  { src: `${s3bucket}travel3.jpg` },
  { src: `${s3bucket}travel5.jpg` },
  { src: `${s3bucket}travel4.jpg` },
  { src: `${s3bucket}travel6.jpg` },
  { src: `${s3bucket}travel7.jpg` },
  { src: `${s3bucket}travel8.jpg` },
  { src: `${s3bucket}travel9.jpg` },
]

const Street = [ 
  { src: `${s3bucket}street1.jpg` },
  { src: `${s3bucket}street2.jpg` },
  { src: `${s3bucket}street3.jpg` },
  { src: `${s3bucket}street4.jpg` },
  { src: `${s3bucket}street5.jpg` },
  { src: `${s3bucket}street6.jpg` },
  { src: `${s3bucket}street7.jpg` },
  { src: `${s3bucket}street8.jpg` },
  { src: `${s3bucket}street11.jpg` },
  { src: `${s3bucket}street9.jpg` },
  { src: `${s3bucket}street13.jpg` },
  { src: `${s3bucket}street12.jpg` },
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
    '@media (max-width: 800px)': {
      opacity: 0.8,
      backgroundColor: "transparent"
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
    '@media (max-width: 800px)': {
        borderRadius: "30%"
     },
  },
  arrow__direction__left: { 
    marginLeft: 10,

    '@media (max-width: 800px)': {
        marginLeft: -20
     },
  },
  arrow__direction__right: { 
    marginRight: 10,

    '@media (max-width: 800px)': {
        marginRight: -20
     },
  },
  close: {
    fill: '#FFA035',
    opacity: 0.6,
    transition: 'all 200ms',
    ':hover': {
      opacity: 1,
    },
    '@media (max-width: 800px)': {
        position: "relative",
        marginTop: "40px",
        marginRight: "0px",
        backgroundColor: "rgba(255,255,255,0.3)"
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
    boxShadow: '0 0 0 2px #FFA035',
  },
};

export default { Portraits, Travel, Street, Theme }
// export default imgArray;