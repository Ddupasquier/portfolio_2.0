import React from 'react';

function Background() {
const bgStyle={
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
}

  return (
    <img
      src="https://i.ibb.co/KFXV3g0/abstract-lines-1.png"
      alt="abstract-lines-1"
      border="0"
      style={bgStyle}
    />
  );
}

export default Background;
