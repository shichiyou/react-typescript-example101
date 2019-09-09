import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Client, ConfigurationData } from '../api/client';
import fetchMock from 'fetch-mock';
import responseData from '../assets/fakes/configurationResponse.json';

fetchMock.get('https://localhost:5001/api/Configuiration', JSON.stringify(responseData));

const useConfigurationService = () => {
  const [result, setResult] = useState<Service<ConfigurationData>>({
    status: 'loading'
  });

  useEffect(() => {
    (new Client('https://localhost:5001')).configuiration()
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));

    return () => { fetchMock.restore(); }   
  }, []);

  return result;
};

export default useConfigurationService;