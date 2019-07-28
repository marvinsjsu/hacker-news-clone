import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';

class App extends React.Component {
  render () {
    return (
      <div className='main-container'>
        <Router>
          <Nav />
          <Switch>

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