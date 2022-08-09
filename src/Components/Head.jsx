import React from 'react';
import { Text } from '@nextui-org/react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

function Head() {
  return (
    <header>
      <Text size="1.5rem">Dylan Dupasquier || Front End Developer</Text>
      <div>
        <a
          href="https://github.com/Ddupasquier/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/dylan-dupasquier/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
    </header>
  );
}

export default Head;
