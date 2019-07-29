import React from 'react';
import Loading from './Loading';
import { getNewStories } from '../utils/api';
import StoryCard from './StoryCard';

export default class New extends React.Component {
  state = {
    stories: []
  };

  componentDidMount () {
    getNewStories()
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