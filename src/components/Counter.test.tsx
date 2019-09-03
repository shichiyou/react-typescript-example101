import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { CounterContainer, ICounter } from './Counter';
// import { createContainer, useContainer } from "unstated-next";

const TestHook: React.FC<{ callback: any }> = ({ callback }) => {
  callback();
  return null;
};

const testHook = (callback: Function) => {
  mount(<CounterContainer.Provider><TestHook callback={callback} /></CounterContainer.Provider>);
};

describe('Counter test suite', () => {
  let counter: ICounter;

  beforeEach(() => {
    testHook(() => {
      counter = CounterContainer.useContainer();
    });
  });

  it('useCountet test', () => {
    expect(counter.count).toBe(0);
  });

  it('should be reset', () => {
    act(() => {
      counter.reset();
    });
    expect(counter.count).toBe(0);
  })

  it('should be increment', () => {
    act(() => {
      counter.reset();
      counter.increment();
    });
    expect(counter.count).toBe(1);
  })

  it('should be decrement', () => {
    act(() => {
      counter.reset();
      counter.increment();
    });
    expect(counter.count).toBe(1);
    act(() => {
      counter.decrement();
    });
    expect(counter.count).toBe(0);
  })
  // it('should render without throwing an error', function() {
  //   expect(shallow(<App />).contains(<img src={logo} className="App-logo" alt="logo" />)).toBe(true);
  // });

  // it('should be selectable by class "App"', function() {
  //   expect(shallow(<App />).is('.App')).toBe(true);
  // });

  // it('should mount in a full DOM', function() {
  //   expect(mount(<App />).find('.App').length).toBe(1);
  // });

  // it('should render to static HTML', function() {
  //   expect(render(<App />).find('.App-link').text()).toEqual('Learn React');
  // });
});
