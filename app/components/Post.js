import React from 'react';
import queryString from 'query-string';
import { getStory, getStoryComments } from '../utils/api';
import StoryCard from './StoryCard';
import Loading from './Loading';
import { getDateTime } from '../utils/time';
import { Link } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/theme';

function Comment ({ id, by, text, time }) {
  const dateTime = getDateTime(time);

  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`row comment comment-${theme}`}>
          <div className='column'>
            <p>by <Link to={`/user?id=${by}`}>{by}</Link> on {dateTime}</p>
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      )}
    </ThemeConsumer>
  );
}


export default class Post extends React.Component {

  state = {
    story: null,
    comments: [],
  };

  componentDidMount () {
    const { id } = queryString.parse(this.props.location.search);

    getStory(id)
      .then((story) => this.setState({ story }));

    getStoryComments(id)
      .then((comments) => this.setState({ comments }));
  }

  render () {
    const { story, comments } = this.state;

    if (story === null) {
      return (
        <Loading text='Loading story' />
      );
    }
    return (
      <div>
        <StoryCard {...story} />
        <ul>
          {comments && comments.length > 0 && comments.map((comment) => (
            <li key={comment.id}>
              <Comment {...comment} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}