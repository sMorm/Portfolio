import React from 'react';

class Skeleton extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <div className='portfolioContainer'>
          <div className='optionContainer'>
            <div className='blankImg' />
            <div className='blankTextContainer'>
              <div className='blankLines' />
              <div className='blankLines' />
              <div className='blankLines end' />
              <div className='blankLines' />
              <div className='blankLines end' />
            </div>
          </div>

          <div className='optionContainer'>
            <div className='blankImg' />
            <div className='blankTextContainer'>
              <div className='blankLines' />
              <div className='blankLines end' />
              <div className='blankLines' />
              <div className='blankLines end' />
              <div className='blankLines' />
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Skeleton;
