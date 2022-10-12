import React from 'react';
import { Card, Grid } from '@nextui-org/react';
import { icons } from '../assets/tech-icons/techicon.js';

function Icons() {
  return (
    <Card
      css={{
        backdropFilter: 'saturate(200%) blur(8px)',
        background: 'rgba(255, 255, 255, 0.2)',
      }}
    >
      <Card.Header>Relevent Tech:</Card.Header>
      <Card.Divider />
      <Card.Body css={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid.Container
          gap="1"
          css={{ justifyContent: 'center', alignItems: 'center' }}
        >
          {icons.map((icon, i) => (
            <Grid key={i}>
              <img
                src={icon.url}
                alt={icon}
                title={icon.title}
                className="tech-icon"
              />
            </Grid>
          ))}
        </Grid.Container>
      </Card.Body>
    </Card>
  );
}

export default Icons;
