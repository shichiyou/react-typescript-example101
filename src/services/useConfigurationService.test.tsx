import { renderHook } from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';
import responseData from '../assets/fakes/configurationResponse.json';
import useConfigurationService from './useConfigurationService';

describe('useConfigurationService', () => {
  // beforeAll(() => {
  //   fetchMock.get('https://localhost:5001/api/Configuiration', JSON.stringify(responseData));
  // });
  // afterAll(() => {
  //   fetchMock.restore();
  // });
  
  it('should useConfigurationService status change', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useConfigurationService())
    expect(result.current.status).toBe('loading');
    await waitForNextUpdate();
    expect(result.current.status).toBe('loaded')
    expect(result.current.status === 'loaded' && result.current.payload!).toEqual(responseData);
  })
});
