import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/theme';

const activeStyle = {
  fontSize: '20px',
  color: 'red',
};

export default function Nav () {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='nav'>
            <li>
              <NavLink
                to='/top'
                className='link'
                activeStyle={activeStyle}
              >
                Top
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/new'
                className='link'
                activeStyle={activeStyle}
              >
                New
              </NavLink>
            </li>
          </ul>
          <button
            className='btn btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? `🔦` : `💡`}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}