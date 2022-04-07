import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const cards = this.props;
    return (
      <div className={ `planets ${cards.planetName}` } data-testid="planet-card">
        <img
          src={ cards.planetImage }
          alt={ `Planeta ${cards.planetName}` }
          className="image"
        />
        <p data-testid="planet-name">
          { cards.planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
