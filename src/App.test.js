import React from 'react';
import ReactDOM from 'react-dom';
import Master from "./news/Master";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Master />, div);
  ReactDOM.unmountComponentAtNode(div);
});
