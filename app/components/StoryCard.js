import React from 'react';
import moment from 'moment';

export default function StoryCard ({ by, title, kids, score, time, url }) {
  const dateTime = moment.unix(time).format('M/D/YYYY, h:mm a');

  return (
    <div className='card'>
      <ul>
        <li>
          <a className='link link-story'href={url} target='_blank' rel='noreferrer'>
            {title}
          </a>
        </li>
        <li>
          by {by}
          on {dateTime}
          with {kids && kids.length > 0 && `${kids.length} comments`}
        </li>
      </ul>
    </div>
  );
}