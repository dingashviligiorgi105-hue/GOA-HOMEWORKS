import React, { useState } from 'react';
import ThemePresentational from './ThemePresentational';
import SecondThemePresentational from './SecondThemePresentational';

function ThemeContainer() {
  const [theme, setTheme] = useState('white');

  const handleClick = () => {
    if (theme === 'white') {
      setTheme('black');
    } else {
      setTheme('white');
    }
  };

  return (
    <div>
      <ThemePresentational theme={theme} handleClick={handleClick} />
      <SecondThemePresentational theme={theme} />
    </div>
  );
}

export default ThemeContainer;
