import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Top from './components/Top';
import New from './components/New';
import User from './components/User';
import Post from './components/Post';

import { ThemeProvider } from './contexts/theme';

import './index.css';

class App extends React.Component {

  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }));
    }
  };

  render () {
    return (
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <Router>
            <Nav />
            <Switch>
              <Route exact path='/' component={Top} />
              <Route exact path='/top' component={Top} />
              <Route exact path='/user' component={User} />
              <Route exact path='/new' component={New} />
              <Route exact path='/post' component={Post} />

            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);