import React from 'react';
import { Card, Text } from '@nextui-org/react';

function AdditionalInfo2() {
  return (
    <Card
      css={{
        backdropFilter: 'saturate(200%) blur(8px)',
        background: 'rgba(255, 255, 255, 0.2)',
      }}
    >
      <Card.Body>
        <Text>
          Since the moment I delved into the world of computers by learning to
          customize MySpace themes as a child, a fascination with computer
          science has stayed with me, and now that passion carries me through
          every project I get to work on. When my eyes aren't glued to a
          computer screen, you can find me outside rock climbing, hiking,
          gardening, or in the garage working on my latest wood working project.
          Technologies which I use daily include React.js, HTML5, CSS3, SCSS,
          JavaScript, Linux, Ruby, Ruby on Rails, VSCode, Ubuntu, Github, and
          Netlify.
        </Text>
      </Card.Body>
    </Card>
  );
}

export default AdditionalInfo2;
