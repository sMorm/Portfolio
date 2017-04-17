// Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Navigation from './components/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Programming from'./components/Programming';
import Photography from './components/Photography';
import About  from './components/About';
import Contact from './components/Contact';

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
