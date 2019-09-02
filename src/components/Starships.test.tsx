import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow, mount, render } from 'enzyme';
import Starships from './Starships';

let container: HTMLElement | null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container!);
  container = null;
});

it('can render and update a Starships', () => {
  const wrapper = shallow(<Starships />);

  
  // Test first render and effect
  act(() => {
    ReactDOM.render(<Starships />, container);
  });
//   const button = container.querySelector('button');
//   const label = container.querySelector('p');
//   expect(label.textContent).toBe('You clicked 0 times');
//   expect(document.title).toBe('You clicked 0 times');

//   // Test second render and effect
//   act(() => {
//     button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
//   });
//   expect(label.textContent).toBe('You clicked 1 times');
//   expect(document.title).toBe('You clicked 1 times');
});