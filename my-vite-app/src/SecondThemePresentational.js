import React from 'react';

function SecondThemePresentational({ theme }) {
  return (
    <div
      style={{
        backgroundColor: theme,
        color: theme === 'black' ? 'white' : 'black',
        padding: '20px'
      }}
    >
      <h2>Second Component</h2>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default SecondThemePresentational;
