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
        <Loading text='Fetching'/>
      );
    }

    return (
      <div>
        <h1>Top</h1>
      </div>
    );
  }
}