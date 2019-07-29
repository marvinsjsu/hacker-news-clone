import React from 'react';
import PropTypes from 'prop-types';
import StoryCard from './StoryCard';
import Loading from './Loading';

export function Posts ({stories=[]}) {
  if (stories.length === 0) {
    return (
      <Loading text='Fetching' />
    );
  }

  return (
    <React.Fragment>
      <h4 className='text-med'>Posts</h4>
      <ul>
        {stories && stories.length > 0 && stories.map((story) => (
          <li key={story.id}>
            <StoryCard {...story} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}