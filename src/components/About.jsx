// Dependencies
import React from 'react';
import { Motion, spring } from 'react-motion'
import BioGrid from './reusables/BioGrid.jsx'

// Media
import BioMedia from './BioMedia'

// Stylesheets
import './styles/About.css'
import './styles/Keyframes.css'

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
            {
              BioMedia.map((media, key) => {
                return (
                  <BioGrid
                    title={media.title}
                    items={media.items}
                  />
                )
              })
            }
            <div style={{height: 20}} />
          </div>
          );
        }
      }
    </Motion>
  );
}

export default About;