import React from 'react';

import PageHeader from './PageHeader'

const headerImg = "http://imgur.com/Et85aCz.png";

const About = () => {
  return(
    <div>
      <PageHeader title="About" img={headerImg} filter='rgba(0, 0, 0,0.1)'/>
    </div>
  );
}

export default About;