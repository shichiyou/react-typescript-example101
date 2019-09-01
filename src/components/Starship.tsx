import React from 'react';
import useStarshipByUrlService from '../services/useStarshipByUrlService';

export interface Props {
  url: string;
}

const Starship: React.FC<Props> = ({ url }) => {
  const service = useStarshipByUrlService(url);

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' && (
        <div>
          <h2>{service.payload.name}</h2>
          ...
        </div>
      )}
      {service.status === 'error' && <div>Error message</div>}
    </div>
  );
};

export default Starship;