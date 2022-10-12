import React from 'react';
import { Text } from '@nextui-org/react';
import Resume from '../assets/Dylan Dupasquier Resume Updated 9_26_2022.pdf';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiFillFilePdf } from 'react-icons/ai';

function Head() {
  return (
    <header style={{ padding: '1.6rem 1rem 1rem 1rem' }}>
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
      <div>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <AiFillFilePdf />
        </a>
      </div>
    </header>
  );
}

export default Head;
