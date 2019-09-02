import React from 'react'
import { render, cleanup, fireEvent, waitForElement, waitForDomChange, getByText } from '@testing-library/react'

import Starships from './Starships';

afterEach(cleanup);

test('<Starships />', async () => {
  const { container, getByText, debug } = render(<Starships />, )
  // debug()
  // <div>
  //   <h1>Hello World</h1>
  // </div>
  // you can also pass an element: debug(getByTestId('messages'))

  expect(getByText(/^Loading...$/i).innerHTML).toBe('Loading...');
  const el = await waitForElement(() =>  getByText(/^Death Star$/i));
  // await waitForDomChange(debug);

  expect(el.innerHTML).toBe('Death Star');
  // debug()
});




