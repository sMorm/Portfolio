import React, { Component } from 'react';

class BioGrid extends Component {
  render() {
    return (
      <div className="bioContainer logos">
        <h1>{this.props.title}</h1>
        <hr/>
        <div className="bioLogos">
          {
            this.props.items.map((item, key) => {
              return (
                <a href={item.link} target="_blank" key={key}>
                  <img src={item.src} alt={item.alt} />
                </a>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default BioGrid