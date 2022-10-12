import React from 'react';
import { Switch } from '@nextui-org/react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

function ThemeSwitch({ checked, setChecked }) {
  return (
    <div
      style={
        window.innerWidth > 768
          ? {
              position: 'fixed',
              top: '1rem',
              right: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.2rem',
              zIndex: '1000',
            }
          : {
              position: 'fixed',
              bottom: '1rem',
              right: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.2rem',
              zIndex: '1000',
            }
      }
    >
      {checked ? (
        <BsFillMoonStarsFill
          style={{
            color: 'rgb(0, 0, 0)',
            height: '1.5rem',
            width: '1.5rem',
          }}
        />
      ) : (
        <BsSunFill
          style={{
            color: 'rgb(80, 255, 255)',
            height: '1.5rem',
            width: '1.5rem',
          }}
        />
      )}
      <Switch
        size="xs"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
}

export default ThemeSwitch;
