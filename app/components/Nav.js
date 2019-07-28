import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  fontSize: '20px',
  color: 'red',
};

export default function Nav () {
  return (
    <div className='row space-between'>
      <ul>
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
    </div>
  );
}