import React from 'react';
import { Card, Text } from '@nextui-org/react';

function Intro() {
  return (
    <Card
      variant="flat"
      css={{
        backdropFilter: 'saturate(200%) blur(8px)',
        background: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <Card.Body>
        <Text size="1.1rem" align="center">
          With over 10+ years of work experience in fast-paced, high-demand,
          customer-facing positions, I am eager to translate my skills in
          Creativity, Critical and Analytical Thinking, and Technical Aptitude
          to the betterment of a Development Team. If you are looking for a
          Flexible/Agile, Dependable/Trustworthy, and Industrious Developer,
          feel free to contact me! Let's make some magic happen!
        </Text>
      </Card.Body>
    </Card>
  );
}

export default Intro;
