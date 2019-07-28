import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Top from './components/Top';

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