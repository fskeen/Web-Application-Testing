import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';
import * as rtl from '@testing-library/react';
import { render } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

afterEach(rtl.cleanup);

describe("<Dashboard />", () => {

  it('renders without crashing', () => {
    render(<Dashboard />)
  })

  it('renders "Dashboard"', () => {
    const dashboard = render(<Dashboard />);
    const text = dashboard.getByText(/Dashboard/i)
  })
})

