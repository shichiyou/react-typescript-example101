import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';
import { StoreInfoPagedCollectionResponse } from 'api/client';
import responseData from 'assets/fakes/storeInfosResponse.json';
import useStoresService from './useStoresService';

describe('useStoresService', () => {
  // beforeAll(() => {
  //   fetchMock.get('https://localhost:5001/api/StoreInfos?Page=1&Limit=10', JSON.stringify(responseData));
  // });
  // afterAll(() => {
  //   fetchMock.restore();
  // });
  
  it('should useStoresService status change', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useStoresService())
    expect(result.current.status).toBe('loading');
    await waitForNextUpdate();
    expect(result.current.status).toBe('loaded')

    const expectData = StoreInfoPagedCollectionResponse.fromJS(responseData);
    expect(result.current.status === 'loaded' && result.current.payload!).toEqual(expectData);
  })
});
