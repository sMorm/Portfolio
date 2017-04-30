// Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Navigation from './components/Navigation.jsx';
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import Programming from'./components/Programming.jsx';
import Photography from './components/Photography.jsx';
import About  from './components/About.jsx';
import Contact from './components/Contact.jsx';

// Stylesheets
import './components/styles/App.css'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/portfolio" component={ Portfolio } />
            <Route path="/portfolio/programming" component={ Programming } />
            <Route path="/portfolio/photography" component={ Photography } />
            <Route path="/about" component={ About } />
            <Route path="/contact" component={ Contact } />
            <Route path="*" render={() => <h1>404 NOT FOUND</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
