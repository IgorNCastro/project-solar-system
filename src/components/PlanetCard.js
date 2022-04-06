import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const cards = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          { cards.planetName }
        </p>
        <img src={ cards.planetImage } alt={ `Planeta ${cards.planetName}` } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
