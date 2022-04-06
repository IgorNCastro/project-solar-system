import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
          {missions.map((item) => (
            <div key={ item.name }>
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
