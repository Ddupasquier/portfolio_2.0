import React from 'react';
import Projects from './Projects';
import { Card, Text } from '@nextui-org/react';

function ProjectContainer() {
  return (
    <Card
      css={{
        backdropFilter: 'saturate(200%) blur(8px)',
        background: 'rgba(255, 255, 255, 0.2)',
      }}
    >
      <Card.Header>
        <Text h3>Projects</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body css={{ overflow: 'hidden' }}>
        <Projects />
      </Card.Body>
    </Card>
  );
}

export default ProjectContainer;
