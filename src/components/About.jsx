// Dependencies
import React from 'react';
import { Motion, spring } from 'react-motion'
//import { Link } from 'react-router-dom';

// Components
import Social from './Social'

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
import EXPRESS from'../media/express.svg';
import CPP from '../media/cpp.svg'
import JS from '../media/js.png'

import PHOTOSHOP from '../media/photoshop.svg'
import LIGHTROOM from '../media/lightroom.svg'
import FCPX from '../media/FCPX.jpg'
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
              <h1>About Me</h1>
              <hr/>
              <p>Student, web/software developer, and photographer learning the full-stack to combine my passion for implementing clean interfaces and applications to better our lives.</p>
              <p> Here are some libraries and languages I use in development: </p>
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
                  <a href="https://expressjs.com/" target="_blank">
                    <img src={EXPRESS} alt="Express logo" />
                  </a>
                  <a href="https://nodejs.org/" target="_blank">
                    <img src={NODE} alt="node logo" />
                  </a>
                  <a href="http://www.cplusplus.com/" target="_blank">
                    <img src={CPP} alt="C++ logo" />
                  </a>
                </div>
            </div>

            <div className="bioContainer logos">
              <h1>Other Tools</h1>
              <hr/>
                <div className="bioLogos">
                <a href="http://www.adobe.com/products/photoshop.html" target="_blank">
                  <img src={PHOTOSHOP} alt="Photoshop logo"/>
                </a>
                <a href="https://www.apple.com/final-cut-pro/" target="_blank">
                  <img src={FCPX} alt="Final Cut Pro X logo"/>
                </a>
                <a href="https://lightroom.adobe.com/" target="_blank">
                  <img src={LIGHTROOM} alt="Lightroom logo"/>
                </a>
                </div>
            </div>
            <div style={{height: 20}} />
            <Social />
          </div>
          );
        }
      }
    </Motion>
  );
}

export default About;