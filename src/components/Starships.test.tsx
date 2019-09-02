import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { shallow, mount, render } from 'enzyme';
import { ShallowWrapper, ReactWrapper } from 'enzyme';
import Starships from './Starships';
import fetchMock from 'fetch-mock';
import responseData from '../services/Starships.json';
import toJson from 'enzyme-to-json';

describe('<Starships />', () => {
  let container: HTMLDivElement | Element | null;

  beforeAll(() => {
    fetchMock.get('https://swapi.co/api/starships', JSON.stringify(responseData));
  });
  afterAll(() => {
    fetchMock.restore();
  });

  test("it shows a list of starships", async () => {
    let wrapper: ReactWrapper;

    // Test first render and effect
    act(() => {
      wrapper = mount(<Starships />);
      expect(wrapper!.text()).toBe('Loading...');
      wrapper!.update();
      expect(toJson(wrapper!)).toMatchSnapshot('step 2');
      wrapper!.update();
      expect(toJson(wrapper!)).toMatchSnapshot('step 3');
      wrapper!.update();
      expect(toJson(wrapper!)).toMatchSnapshot('step 4');
      wrapper!.update();
    });



    wrapper!.unmount();
});  
});
