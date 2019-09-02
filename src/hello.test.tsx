import React from 'react'
import { render } from '@testing-library/react'

const HelloWorld = () => <h1>Hello World</h1>


test('adds 1 + 2 to equal 3', () => {
  const { debug } = render(<HelloWorld />)
  debug()
  // <div>
  //   <h1>Hello World</h1>
  // </div>
  // you can also pass an element: debug(getByTestId('messages'))
});




