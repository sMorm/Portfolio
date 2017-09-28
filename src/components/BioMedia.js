// Frontend
import HTML from '../media/html.png';
import CSS from '../media/css.png';
import RLOGO from '../media/react.svg'
import REDUX from '../media/redux.jpg'

// Backend
import EXPRESS from '../media/express.jpg'
import NODE from '../media/nodejs.jpg';
import APACHE from '../media/apache.jpg'
import MONGO from '../media/mongo.jpg'

// Other
import DOCKER from '../media/docker.png'
import JENKINS from '../media/jenkins.png'
import AWS from '../media/aws.png'
import CPP from '../media/cpp.jpg'

// Social
import GITHUB from '../media/github.png'
import LINKEDIN from '../media/linkedin.png'
import STACKOVERFLOW from '../media/stackoverflow.png'

const frontEnd = {
  title: "Front-End",
  items: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      src: HTML,
      alt: "HTML logo"
    },
    {
      link: "https://facebook.github.io/react/",
      src: RLOGO,
      alt:"React logo" 
    },
    {
      link: "http://redux.js.org",
      src: REDUX,
      alt: "Redux Logo" 
    },
    {
      link: "https://en.wikipedia.org/wiki/CSS3",
      src: CSS,
      alt: "CSS logo"
    },
  ]
}

const backEnd = {
  title: "Back-End",
  items: [
    {
      link: "https://www.mongodb.com",
      src: MONGO,
      alt: "MongoDB logo" 
    },
    {
      link: "https://nodejs.org/",
      src: NODE,
      alt:"Node logo" 
    },
    {
      link: "https://expressjs.com",
      src: EXPRESS,
      alt: "Express logo"
    },
    {
      link: "https://httpd.apache.org",
      src: APACHE,
      alt: "Apache logo"
    },
  ]
}

const other = {
  title: "Other",
  items: [
    {
      link: "https://www.docker.com/what-docker",
      src: DOCKER,
      alt: "Docker logo"
    },
    {
      link: "https://jenkins.io",
      src: JENKINS,
      alt:"Node logo" 
    },
    {
      link: "https://aws.amazon.com",
      src: AWS,
      alt: "AWS logo" 
    },    
    {
      link: "http://www.cplusplus.com",
      src: CPP,
      alt: "C++ logo"
    },
  ]
}

const social = {
  title: "Social",
  items: [
    {
      link: "https://github.com/sMorm",
      src: GITHUB,
      alt: "Github logo"
    },
    {
      link: "https://www.linkedin.com/in/sereymorm",
      src: LINKEDIN,
      alt:"LinkedIn logo" 
    },
    {
      link: "https://stackoverflow.com/users/3411861/serey/",
      src: STACKOVERFLOW,
      alt: "stackoverflow logo" 
    }
  ]
}

const media = [frontEnd, backEnd, other, social]

export default media