import React from 'react';
import LinesBg from '../assets/abstract-lines (1).webp';

function Background() {
  const bgStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100%',
  };

  return (
    <img
      src={LinesBg}
      alt="abstract-lines-1"
      border="0"
      style={bgStyle}
    />
  );
}

export default Background;
