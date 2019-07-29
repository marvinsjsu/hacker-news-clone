import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/theme';
import { getDateTime } from '../utils/time';

export default function StoryCard ({ id, by, title, kids, score, time, url }) {
  const dateTime = getDateTime(time);

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
                className={`link underline text-${theme === 'light' ? 'dark' : 'light'}`}
                to={`/user?id=${by}`}
              >
                {by}
              </Link>
              {` `}
              on {dateTime}
              {` `}
              {kids && kids.length > 0 && (
                <React.Fragment>
                {`with `}
                <Link
                  className={`link underline text-${theme === 'light' ? 'dark' : 'light'}`}
                  to={`/post?id=${id}`}
                >
                  {kids.length}
                </Link>
                {kids.length > 1 ? ' comments' : ' comment'}
                </React.Fragment>
              )}
            </li>
          </ul>
        </div>
      )}
    </ThemeConsumer>
  );
}

StoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  kids: PropTypes.arrayOf(PropTypes.number),
  score: PropTypes.number,
  time: PropTypes.number.isRequired,
  url: PropTypes.string
};