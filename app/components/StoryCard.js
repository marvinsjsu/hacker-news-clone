import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

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
          by <Link to={`/user?id=${by}`}>{by}</Link>
          on {dateTime}
          with {kids && kids.length > 0 && `${kids.length} comments`}
        </li>
      </ul>
    </div>
  );
}

StoryCard.propTypes = {
  by: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  kids: PropTypes.arrayOf(PropTypes.number),
  score: PropTypes.number,
  time: PropTypes.number.isRequired,
  url: PropTypes.string
};