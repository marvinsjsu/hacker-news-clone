import React from 'react';
import Loading from './Loading';
import { getTopStories } from '../utils/api';
import StoryCard from './StoryCard';

export default class Top extends React.Component {
  state = {
    stories: []
  };

  componentDidMount () {
    getTopStories()
      .then((data) => this.setState({ stories: data }));
  }

  render () {
    const { stories } = this.state;

    if (stories.length <= 0) {
      return (
        <Loading text='Fetching'/>
      );
    }

    return (
      <ul>
      {stories && stories.length > 0 && (
        stories.map((story) => (
          <li key={story.id} className='row story'>
            <StoryCard {...story} />
          </li>
        ))
      )}
      </ul>
    );
  }
}