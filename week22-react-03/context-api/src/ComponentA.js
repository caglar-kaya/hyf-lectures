import React from 'react';
import ThemeContext from './ThemeContext';
import D from './ComponentD';
import C from './ComponentC'

const A = () => (
  <ThemeContext.Provider value="green">
    <C />
    <D />
  </ThemeContext.Provider>
);

export default A;
