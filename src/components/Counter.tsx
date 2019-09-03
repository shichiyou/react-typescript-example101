import React, { useState } from "react";
import { createContainer } from "unstated-next";
import classnames from 'classnames';

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
  return (
    <div>
      <button className={decrementClass} onClick={counter.decrement}>-</button>
      <span className={countClass}>{counter.count}</span>
      <button className={incrementClass} onClick={counter.increment}>+</button>
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