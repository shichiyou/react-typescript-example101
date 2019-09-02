import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Basic from './Basic';

it('renders correctly enzyme', () => {
  const wrapper = shallow(<Basic />)

  expect(toJson(wrapper)).toMatchSnapshot();
});