import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import * as rtl from '@testing-library/react';
import { render } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

afterEach(rtl.cleanup);

describe("<Display />", () => {

  it('renders without crashing', () => {
    render(<Display />)
  })

  it('renders "Display"', () => {
    const display = render(<Display />);
    const text = display.getByText(/display/i)
  })
})

