const s3bucket = 'https://s3.amazonaws.com/sereymorm.com/media/'

const frontEnd = {
  title: "Front-End",
  items: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      src: `${s3bucket}html.png`,
      alt: "HTML logo"
    },
    {
      link: "https://facebook.github.io/react/",
      src: `${s3bucket}react.svg`,
      alt:"React logo" 
    },
    {
      link: "http://redux.js.org",
      src: `${s3bucket}redux.jpg`,
      alt: "Redux Logo" 
    },
    {
      link: "https://en.wikipedia.org/wiki/CSs3bucket",
      src: `${s3bucket}css.png`,
      alt: "CSS logo"
    },
  ]
}

const backEnd = {
  title: "Back-End",
  items: [
    {
      link: "https://www.mongodb.com",
      src: `${s3bucket}mongo.jpg`,
      alt: "MongoDB logo" 
    },
    {
      link: "https://nodejs.org/",
      src: `${s3bucket}nodejs.jpg`,
      alt:"Node logo" 
    },
    {
      link: "https://expressjs.com",
      src: `${s3bucket}express.jpg`,
      alt: "Express logo"
    },
    {
      link: "https://httpd.apache.org",
      src: `${s3bucket}apache.jpg`,
      alt: "Apache logo"
    },
  ]
}

const other = {
  title: "Other",
  items: [
    {
      link: "https://www.docker.com/what-docker",
      src: `${s3bucket}docker.png`,
      alt: "Docker logo"
    },
    {
      link: "https://jenkins.io",
      src: `${s3bucket}jenkins.png`,
      alt:"Node logo" 
    },
    {
      link: "https://aws.amazon.com",
      src: `${s3bucket}aws.png`,
      alt: "AWS logo" 
    },    
    {
      link: "http://www.cplusplus.com",
      src: `${s3bucket}cpp.jpg`,
      alt: "C++ logo"
    },
  ]
}

const social = {
  title: "Social",
  items: [
    {
      link: "https://github.com/sMorm",
      src: `${s3bucket}github.png`,
      alt: "Github logo"
    },
    {
      link: "https://www.linkedin.com/in/sereymorm",
      src: `${s3bucket}linkedin.png`,
      alt:"LinkedIn logo" 
    },
    {
      link: "https://stackoverflow.com/users/3411861/serey/",
      src: `${s3bucket}stackoverflow.png`,
      alt: "stackoverflow logo" 
    }
  ]
}

const media = [frontEnd, backEnd, other, social]

export default media