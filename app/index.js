import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Top from './components/Top';

import './index.css';

class App extends React.Component {
  render () {
    return (
      <div className='main-container'>
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={Top} />
            <Route exact path='/top' component={Top} />
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);