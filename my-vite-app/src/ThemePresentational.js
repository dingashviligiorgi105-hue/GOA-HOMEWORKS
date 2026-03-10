import React from 'react';

function ThemePresentational({ theme, handleClick }) {
  return (
    <div
      style={{
        backgroundColor: theme,
        color: theme === 'black' ? 'white' : 'black',
        padding: '20px',
        marginBottom: '20px'
      }}
    >
      <h2>First Component</h2>
      <p>Current theme: {theme}</p>
      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
}

export default ThemePresentational;
