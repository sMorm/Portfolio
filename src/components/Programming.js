import React from 'react';

import ballot from '../media/project_1.png';
import mimic from '../media/project_2.png';
import poker from '../media/project_3.png';
class Programming extends React.Component {
  render(){
    return (
      <div className="portfolioContainer">

        <div className="optionContainer">
          <img src={ballot} alt="option 1" onLoad={this.isLoading}/>
          <h1>Ballot</h1>
          <p>A collection of my work ranging from street and cityscape photographies to my travels.</p>
          <p>See more at . . .</p>
        </div>

        <div className="optionContainer">
          <img src={mimic} alt="option 1" onLoad={this.isLoading}/>
          <h1>Mimic</h1>
          <p>A collection of my work ranging from street and cityscape photographies to my travels.</p>
          <p>See more at . . .</p>
        </div>

        <div className="optionContainer">
          <img src={poker} alt="option 1" onLoad={this.isLoading}/>
          <h1>Poker</h1>
          <p>A collection of my work ranging from street and cityscape photographies to my travels.</p>
          <p>See more at . . .</p>
        </div>

      </div>
    );
  }
}

export default Programming;