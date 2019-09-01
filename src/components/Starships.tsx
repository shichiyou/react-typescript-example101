import React from 'react';
import useStarshipsService from '../services/useStarshipsService';

const Starships: React.FC<{}> = () => {
  const service = useStarshipsService();

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload.results.map(starship => (
          <div key={starship.url}>{starship.name}</div>
        ))}
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  );
};

export default Starships;
