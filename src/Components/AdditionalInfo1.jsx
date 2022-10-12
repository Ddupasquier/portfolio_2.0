import React from 'react';
import { Card, Text } from '@nextui-org/react';

function AdditionalInfo1() {
  return (
    <Card
      css={{
        backdropFilter: 'saturate(200%) blur(8px)',
        background: 'rgba(255, 255, 255, 0.2)',
      }}
    >
      <Card.Body>
        <Text>
          I am proficient in building full-scale websites using React and Ruby
          on Rails. I'm a full-stack (front-end leaning), junior level
          developer. At the top-right of this segment there is a link where you
          can download and view my resume. Included on this page is a collection
          of personal projects that I've worked on recently, which is
          consistently being updated with new content, as well as a contact
          section if you would like to contact me.
        </Text>
      </Card.Body>
    </Card>
  );
}

export default AdditionalInfo1;
