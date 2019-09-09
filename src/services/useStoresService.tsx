import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Client, StoreInfoPagedCollectionResponse } from '../api/client';
import fetchMock from 'fetch-mock';
import responseData from 'assets/fakes/storeInfosResponse.json';


const useStoresService = () => {
  const [result, setResult] = useState<Service<StoreInfoPagedCollectionResponse>>({
    status: 'loading'
  });

  useEffect(() => {
    fetchMock.get('https://localhost:5001/api/StoreInfos?Page=1&Limit=10', JSON.stringify(responseData), { overwriteRoutes: true });

    (new Client('https://localhost:5001')).storeInfos(undefined, 1, 10)
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));

    return () => { fetchMock.restore(); }      
  }, []);

  return result;
};

export default useStoresService;