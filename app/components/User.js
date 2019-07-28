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
    <div className='row user'>
      <ul>
        <li>
          <h4 className='text-med'>{id}</h4>
        </li>
        <li>
          joined {dateTime} has {karma.toLocaleString()} karma
        </li>
      </ul>
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
      <div className='card user'>
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