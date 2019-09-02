import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Starship } from '../types/Starship';

export interface IStarships {
  results: Starship[];
}

const useStarshipsService = () => {
  const [result, setResult] = useState<Service<IStarships>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://swapi.co/api/starships')
      // .then(response => { console.log(response); return response })
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useStarshipsService;