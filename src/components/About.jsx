// Dependencies
import React from 'react';
import { Motion, spring } from 'react-motion'
//import { Link } from 'react-router-dom';

// Components
// import Social from './Social'

// Stylesheets
import './styles/About.css'
import './styles/Keyframes.css'

// Media
//import brush from '../media/brush.svg'
import HTML from '../media/html.png';
import CSS from '../media/css.png';
import RLOGO from '../media/react.svg'
import SKETCH from '../media/sketch.svg'

import NODE from '../media/nodejs.jpg';
import CPP from '../media/cpp.svg'
import JS from '../media/js.png'

import DOCKER from '../media/docker.png'
import JENKINS from '../media/jenkins.png'
import AWS from '../media/aws.png'
import MYSQL from '../media/mysql.png'

import GITHUB from '../media/github.png'
import LINKEDIN from '../media/linkedin.png'
import STACKOVERFLOW from '../media/stackoverflow.png'

const About = () => {
  return(
    <Motion defaultStyle={{ x: 0, y: -5 }}
    style={{ x: spring(1), y: spring(1, {stiffness: 100, damping: 20})}}>
      {value => {
        const { x, y } = value;
        const style = {
          transform: `translateY(${y}%)`,
          opacity: x
        }
        return (
          <div style={style} className="aboutContainer">
            <div className="bioContainer">
              <p>Student, web/software developer, and photographer learning the full-stack to pave a career path where my passion for technology and visual arts are able to coexist.</p>
              <p> Some of the tools I use in development: </p>
            </div>

            <div className="bioContainer logos">
              <h1>Front-End</h1>
              {//<img src={brush} className="brush"/>}
              }
              <hr/>
                <div className="bioLogos">
                  <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
                    <img src={HTML} alt="html logo" />
                  </a>
                  <a href="https://facebook.github.io/react/" target="_blank">
                    <img src={RLOGO} alt="react logo" className="react-logo"/>
                  </a>
                  <a href="https://sketchapp.com/" target="_blank">
                    <img src={SKETCH} alt="SKETCH logo" />
                  </a>
                  <a href="https://en.wikipedia.org/wiki/CSS3" target="_blank">
                    <img src={CSS} alt="css logo" />
                  </a>
                </div>
            </div>

            <div className="bioContainer logos">
              <h1>Back-End</h1>
              <hr/>
                <div className="bioLogos">
                  <a href="https://www.javascript.com/" target="_blank">
                    <img src={JS} alt="js logo" />
                  </a>
                  <a href="https://nodejs.org/" target="_blank">
                    <img src={NODE} alt="node logo" />
                  </a>
                  <a href="https://mysql.com/" target="_blank">
                    <img src={MYSQL} alt="mysql logo"/>
                  </a>
                  <a href="http://www.cplusplus.com/" target="_blank">
                    <img src={CPP} alt="C++ logo" />
                  </a>
                </div>
            </div>

            <div className="bioContainer logos">
              <h1>DevOps</h1>
              <hr/>
                <div className="bioLogos">
                <a href="https://www.docker.com/what-docker" target="_blank">
                  <img src={DOCKER} alt="Docker logo"/>
                </a>
                <a href="https://jenkins.io" target="_blank">
                  <img src={JENKINS} alt="Jenkins logo"/>
                </a>
                <a href="https://aws.amazon.com/what-is-aws/" target="_blank">
                  <img src={AWS} alt="AWS logo"/>
                </a>
                </div>
            </div>
            <div className="bioContainer logos">
              <h1>Social</h1>
              <hr/>
                <div className="bioLogos social">
                <a href="https://github.com/sMorm" target="_blank">
                  <img src={GITHUB} alt="Github logo"/>
                </a>
                <a href="https://www.linkedin.com/in/sereymorm" target="_blank">
                  <img src={LINKEDIN} alt="LinkedIn logo"/>
                </a>
                <a href="https://stackoverflow.com/users/3411861/serey/" target="_blank">
                  <img src={STACKOVERFLOW} alt="stackoverflow logo"/>
                </a>
                </div>
            </div>
            <div style={{height: 20}} />
          </div>
          );
        }
      }
    </Motion>
  );
}

export default About;