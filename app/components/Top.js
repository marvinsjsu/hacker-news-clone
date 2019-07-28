import React from 'react';
import Loading from './Loading';

export default class Top extends React.Component {
  state = {
    items: []
  };

  render () {
    const { items } = this.state;

    if (items.length <= 0) {
      return (
        <div className='row center center-text'>
          <Loading text='Fetching'/>
        </div>
      );
    }

    return (
      <div>
        <h1>Top</h1>
      </div>
    );
  }
}