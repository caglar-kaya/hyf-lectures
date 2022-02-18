import React from 'react';
import ThemeContext from './ThemeContext';

const D = () => (
  <ThemeContext.Consumer>
    {(value) => <p style={{ color: value }}>Hello World</p>}
  </ThemeContext.Consumer>
);

export default D;
