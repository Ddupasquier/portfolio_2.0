import React from 'react';
import { Card, Text } from '@nextui-org/react';

function Contact() {
      return ( <Card
            css={{
              backdropFilter: 'saturate(200%) blur(8px)',
              background: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <Card.Header>
              <Text h3>Contact</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Text>Email: dylandupasquier@gmail.com</Text>
              <Text>
                Linkedin:{' '}
                <a
                  href="https://www.linkedin.com/in/dylan-dupasquier/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.linkedin.com/in/dylan-dupasquier/
                </a>
              </Text>
              <Text>
                Github:{' '}
                <a
                  href="https://github.com/Ddupasquier/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Ddupasquier/
                </a>
              </Text>
            </Card.Body>
          </Card> );
}

export default Contact;