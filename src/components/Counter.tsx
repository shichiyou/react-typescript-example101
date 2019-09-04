import React, { useState } from "react";
import { createContainer } from "unstated-next";
import classnames from 'classnames';
import Button from '@material-ui/core/Button';

export interface ICounter {
  count: number,
  decrement: () => void,
  increment: () => void,
  reset: () => void,
};

export const useCounter = (initialState = 0): ICounter => {
  let [count, setCount] = useState(initialState);
  let decrement = () => setCount(count - 1);
  let increment = () => setCount(count + 1);
  let reset = () => setCount(0);
  return { count, decrement, increment, reset };
}

export const CounterContainer = createContainer(useCounter);

export const CounterDisplay = () => {
  let counter = CounterContainer.useContainer();

  const decrementClass = classnames('decrement', [ ]);
  const incrementClass = classnames('increment', [ ]);
  const countClass = classnames('count', [ ]);
  const containerClass = classnames('counter', [ ]);
  return (
    <div className={containerClass} style={{ backgroundColor: 'white' }}>
      <Button variant="contained" color="primary" className={decrementClass} onClick={counter.decrement}>-</Button>
      <span className={countClass} style={{ color: 'black', margin: '20px' }}>{counter.count}</span>
      <Button variant="contained" color="primary" className={incrementClass} onClick={counter.increment}>+</Button>
    </div>
  );
}

export const CounterUI = () => {
    return (
      <CounterContainer.Provider>
        <CounterDisplay />
        <CounterContainer.Provider initialState={2}>
          <div>
            <div>
              <CounterDisplay />
            </div>
          </div>
        </CounterContainer.Provider>
      </CounterContainer.Provider>
    );
}

export default CounterDisplay;