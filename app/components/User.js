import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import moment from 'moment';
import { getUser, getUserStories } from '../utils/api';
import StoryCard from './StoryCard';
import Loading from './Loading';

function UserProfile ({ id, about, created, karma }) {
  const dateTime = moment.unix(created).format('M/D/YYYY, h:mm a');

  return (
    <div className='row'>
      <div className='column'>
        <h4 className='text-med margin-none'>{id}</h4>
        <p className='margin-none'>
          joined {dateTime} has {karma.toLocaleString()} karma
        </p>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  id: PropTypes.string.isRequired,
  about: PropTypes.string,
  created: PropTypes.number.isRequired,
  karma: PropTypes.number.isRequired
};

export default class User extends React.Component {

  state = {
    user: null,
    stories: []
  };

  componentDidMount () {
    const { id } = queryString.parse(this.props.location.search);

    getUser(id)
      .then((data) => this.setState({ user: data }));

    getUserStories(id)
      .then((data) => this.setState({ stories: data }));
  }

  render () {
    const { user, stories } = this.state;

    if (user == null) {
      return (
        <Loading text='Loading User' />
      );
    }

    return (
      <div className='card'>
        <UserProfile {...user} />
        <ul>
          {stories.length > 0 && stories.map((story) => (
            <li key={story.id}>
              <StoryCard {...story} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}