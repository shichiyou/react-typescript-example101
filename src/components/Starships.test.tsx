import React from 'react'
import { render, cleanup, fireEvent, waitForElement, waitForDomChange, getByText, waitForElementToBeRemoved } from '@testing-library/react'
import fetchMock from 'fetch-mock';
import Starships from './Starships';
import responseData from '../services/Starships.json';

afterEach(cleanup);

beforeAll(() => {
  fetchMock.get('https://swapi.co/api/starships', JSON.stringify(responseData));
});
afterAll(() => {
  fetchMock.restore();
});

test('<Starships />', async () => {
  const { container, getByText, debug } = render(<Starships />, )
  // debug()
  // <div>
  //   <h1>Hello World</h1>
  // </div>
  // you can also pass an element: debug(getByTestId('messages'))

  const el = getByText(/^Loading...$/i).parentElement;
  await waitForElementToBeRemoved(() => getByText(/^Loading...$/i))
  // expect(getByText(/^Executor$/i)).toBe('Loading...');
  expect(el!.childElementCount).toBe(1);
  // const el = await waitForElement(() =>  getByText(/^Death Star$/i));
  // await waitForDomChange(debug);

  // expect(el.innerHTML).toBe('Death Star');
  // debug()
});




