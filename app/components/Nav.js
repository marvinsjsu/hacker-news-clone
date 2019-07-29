import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/theme';

const activeStyle = {
  fontSize: 20,
  color: 'rgb(187, 46, 31)'
}

export default function Nav () {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='nav'>
            <li>
              <NavLink
                to='/top'
                className='nav-link'
                activeStyle={activeStyle}
              >
                Top
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/new'
                className='nav-link'
                activeStyle={activeStyle}
              >
                New
              </NavLink>
            </li>
          </ul>
          <button
            className={`btn btn-clear btn-${theme}`}
            onClick={toggleTheme}
          >
            {theme === 'light' ? `🔦` : `💡`}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}