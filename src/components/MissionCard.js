import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const cards = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">
          { cards.name }
        </p>
        <p data-testid="mission-year">
          { cards.year }
        </p>
        <p data-testid="mission-country">
          { cards.country }
        </p>
        <p data-testid="mission-destination">
          { cards.destination }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
