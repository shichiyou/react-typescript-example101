import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, mount, render } from 'enzyme';

import App from './App';
import logo from './logo.svg';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains(<img src={logo} className="App-logo" alt="logo" />)).toBe(true);
  });

  it('should be selectable by class "App"', function() {
    expect(shallow(<App />).is('.App')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('.App').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<App />).find('.App-link').text()).toEqual('Learn React');
  });
});
