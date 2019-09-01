import React, { useState } from "react";
import { createContainer } from "unstated-next";

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

export const Counter = createContainer(useCounter);

export const CounterDisplay = () => {
  let counter = Counter.useContainer();
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
}

export const CounterUI = () => {
    return (
      <Counter.Provider>
        <CounterDisplay />
        <Counter.Provider initialState={2}>
          <div>
            <div>
              <CounterDisplay />
            </div>
          </div>
        </Counter.Provider>
      </Counter.Provider>
    );
}

export default CounterDisplay;