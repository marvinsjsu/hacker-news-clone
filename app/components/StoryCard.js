import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/theme';

export default function StoryCard ({ by, title, kids, score, time, url }) {
  const dateTime = moment.unix(time).format('M/D/YYYY, h:mm a');

  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className='card'>
          <ul>
            <li className='story-title'>
              <a
                className={`link story text-${theme === 'light' ? 'dark' : 'light'}`}
                href={url}
                target='_blank'
                rel='noreferrer'
              >
                {title}
              </a>
            </li>
            <li className={`story-details text-${theme === 'light' ? 'dark' : 'light'}`}>
              by
              {` `}
              <Link
                className={`link user text-${theme === 'light' ? 'dark' : 'light'}`}
                to={`/user?id=${by}`}
              >
                {by}
              </Link>
              {` `}
              on {dateTime}
              {` `}
              {kids && kids.length > 0 && `with ${kids.length} comments`}
            </li>
          </ul>
        </div>
      )}
    </ThemeConsumer>
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