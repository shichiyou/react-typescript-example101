import { renderHook, act } from '@testing-library/react-hooks';
import CounterDisplay, { useCounter, CounterContainer } from './Counter';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

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

const CounterComsumerMock = () => {
  let counter = CounterContainer.useContainer();

  return (
    <div>
      <button data-testid='decrement' onClick={counter.decrement} >-</button>
      <span data-testid='count-text'>{counter.count}</span>
      <button data-testid='increment' onClick={counter.increment}>+</button>
    </div>    
  );
} 

describe('Counter', () => {
  it('should Counter status change', () => {
    let { getByTestId } = render(<CounterContainer.Provider><CounterComsumerMock/></CounterContainer.Provider>);
  
    let incButton = getByTestId('increment');
    let decButton = getByTestId('decrement');
    let countText = getByTestId('count-text');

    expect(countText.innerHTML).toBe('0');
    for (var idx = 0; idx < 5; idx++) {
      fireEvent.click(incButton);
    }
    expect(countText.innerHTML).toBe('5');
    fireEvent.click(decButton);
    expect(countText.innerHTML).toBe('4');
  });
});

describe('CounterDisplay', () => {
  it('should Counter status change', () => {
    let { getByText } = render(<CounterContainer.Provider><CounterDisplay/></CounterContainer.Provider>);

    let incButton = getByText(/\+/i);
    let decButton = getByText(/\-/i);
    let countText = getByText(/0/i);

    expect(countText.innerHTML).toBe('0');
    for (var idx = 0; idx < 5; idx++) {
      fireEvent.click(incButton);
    }
    expect(countText.innerHTML).toBe('5');
    fireEvent.click(decButton);
    expect(countText.innerHTML).toBe('4');
    
  });
});