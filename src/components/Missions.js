import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map((item) => (
            <div key={ item.name } className="missions-list">
              <MissionCard
                name={ item.name }
                year={ item.year }
                country={ item.country }
                destination={ item.destination }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
