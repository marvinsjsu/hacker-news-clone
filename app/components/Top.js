import React from 'react';
import Loading from './Loading';
import { getTopStories } from '../utils/api';
import StoryCard from './StoryCard';

export default class Top extends React.Component {
  state = {
    items: []
  };

  componentDidMount () {
    getTopStories()
      .then((data) => this.setState({ items: data }));
  }

  render () {
    const { items } = this.state;
    console.log('items: ', items);
    if (items.length <= 0) {
      return (
        <div className='row center center-text'>
          <Loading text='Fetching'/>
        </div>
      );
    }

    return (
      <div>
        <ul>
        {items && items.length > 0 && (
          items.map((story) => (
            <li key={story.id} className='row story'>
              <StoryCard {...story} />
            </li>
          ))
        )}
        </ul>
      </div>
    );
  }
}