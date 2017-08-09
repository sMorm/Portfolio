//Other Dependencies
import shuffle from 'shuffle-array';


// Portraits
import p1 from '../media/portrait1.jpg';
import p2 from '../media/portrait2.jpg';
import p3 from '../media/portrait3.jpg';
import p4 from '../media/portrait4.jpg';
import p5 from '../media/portrait5.jpg';
import p6 from '../media/portrait6.jpg';
import p7 from '../media/portrait7.jpg';
import p8 from '../media/portrait8.jpg';
import p9 from '../media/portrait9.jpg';

// Architecture
import l1 from '../media/landscape1.jpg';
import l2 from '../media/landscape2.jpg';
import l3 from '../media/landscape3.jpg';
import l4 from '../media/landscape4.jpg';
import l5 from '../media/landscape5.jpg';
import l6 from '../media/landscape6.jpg';
import l7 from '../media/landscape7.jpg';
import l8 from '../media/landscape8.jpg';
import l9 from '../media/landscape9.jpg';

// Street
import s1 from '../media/street1.jpg';
import s2 from '../media/street2.jpg';
import s3 from '../media/street3.jpg';
import s4 from '../media/street4.jpg';
import s5 from '../media/street5.jpg';
import s6 from '../media/street6.jpg';
import s7 from '../media/street7.jpg';
import s8 from '../media/street8.jpg';
import s9 from '../media/street9.jpg';
import s13 from '../media/street13.jpg';
import s11 from '../media/street11.jpg';
import s12 from '../media/street12.jpg';

const Portraits = [ 
  { src: p1 }, 
  { src: p2 }, 
  { src: p3 }, 
  { src: p4 }, 
  { src: p5 }, 
  { src: p6 },
  { src: p7 },
  { src: p8 },
  { src: p9 }
] 

const Architecture = [
  { src: l2 },
  { src: l1 },
  { src: l3 },
  { src: l5 },
  { src: l4 },
  { src: l6 },
  { src: l7 },
  { src: l8 },
  { src: l9 },
]

const Street = [ 
  { src: s1 }, 
  { src: s2 }, 
  { src: s3 },
  { src: s4 },
  { src: s5 },
  { src: s6 },
  { src: s7 },
  { src: s8 },
  { src: s11},
  { src: s9 },
  { src: s13 },
  { src: s12 }
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

export default { Portraits, Architecture, Street, Theme }
// export default imgArray;