// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-media';

// Stylesheets
import './styles/NavigationStyle.css';


// Media
import NavTab from '../media/navtab.svg';

class Navigation extends React.Component {
  state = {
    navOpen: false
  }

  navClick = () => {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }
  
  render(){
    return (
      <MediaQuery query="(max-width: 300px)">
        {matches => matches
          ? (
            <div>
            <div className="mobilePlaceholder"/>
              <div className="mobileContainer">
                <button onClick={this.navClick} >
                  <img src={NavTab} alt="tab" className="navTab" />
                </button>
                {this.state.navOpen
                  && (
                    <div onClick={this.navClick} className="linkContainer">
                    <hr/>
                      <NavLink to="/" className="linkMobile">Home</NavLink>
                      <NavLink to="/photography" className="linkMobile">Portfolio</NavLink>
                      <NavLink to="/contact" className="linkMobile">Contact</NavLink>
                    </div>
                  )
                }
              </div>
            </div>
          )
          : (
            <div>
            <div className="placeholder"/>
              <div className="navContainer">
                <NavLink exact activeClassName="activeLink" to="/" className="link" >Home</NavLink>
                <NavLink activeClassName="activeLink" to="/photography" className="link">Portfolio</NavLink>
                <NavLink activeClassName="activeLink" to="/contact" className="link">Contact</NavLink>
              </div>
            </div>
          )
        }
      </MediaQuery>
    )
  }
}


export default Navigation;