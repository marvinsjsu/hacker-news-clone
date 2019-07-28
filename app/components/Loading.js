import React from 'react';
import PropTypes from 'prop-types';

export default class Loading extends React.Component {

  static propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
  };

  state = {
    loading: this.props.text,
  };

  componentDidMount () {
    const { text, speed=300 } = this.props;

    this.loadingInterval = window.setInterval(() => {
      this.setState(({ loading }) => ({
        loading: loading === text + '...'
          ? text
          : loading + '.'
      }));
    }, speed);
  }

  componentWillUnmount () {
    window.clearInterval(this.loadingInterval);
  }

  render () {
    const { loading } = this.state;

    return (
      <p className='row center center-text loading'>{loading}</p>
    );
  }
}