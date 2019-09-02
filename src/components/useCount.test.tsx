import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './Counter';

describe('useCounter', () => {
  it('should useCounter status change', () => {
    const { result, waitForNextUpdate } = renderHook(() => useCounter())
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
    act(() => {
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(1);
  })
});

describe('Counter', () => {
  it('should Counter status change', () => {
  });
});