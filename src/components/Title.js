import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const text = this.props;
    return (
      <h2>
        { text.headline }
      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
