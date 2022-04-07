import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets-list">
          {planets.map((item) => (
            <div key={ item.name }>
              <PlanetCard planetName={ item.name } planetImage={ item.image } />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
