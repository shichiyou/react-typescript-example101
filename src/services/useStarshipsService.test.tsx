import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';
import responseData from './Starships.json';
import useStarshipsService from './useStarshipsService';

describe('useStarshipsService', () => {
  beforeAll(() => {
    fetchMock.get('https://swapi.co/api/starships', JSON.stringify(responseData));
  });
  afterAll(() => {
    fetchMock.restore();
  });
  
  it('should useStarshipsService status change', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useStarshipsService())
    expect(result.current.status).toBe('loading');
    await waitForNextUpdate();
    expect(result.current.status).toBe('loaded')
    expect(result.current.status === 'loaded' && result.current.payload!).toStrictEqual(responseData);
  })
});
