import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Error from './components/pages/Error';
// import Maintenance from './components/pages/Maintenance';

import './App.css';

import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

const App = () => {
  return (
    // <div class='app-container'>
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            {/* Use Maintenance with index path (instead of Home) when needing to temporarily shut down site: */}
            {/* <Route exact path='/' component={Maintenance} /> */}
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
