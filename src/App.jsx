import React, { useState } from 'react';
import './scss/App.css';
import {
  NextUIProvider,
  createTheme,
  Switch,
  Grid,
  Card,
  Text,
} from '@nextui-org/react';
import { BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { icons } from './assets/tech-icons/techicon.js';
import FlatCert from './assets/April 2022 Live Grad_Part32.pdf';
import Background from './Components/Background';
import Head from './Components/Head';
import Projects from './Components/Projects';

const darkTheme = createTheme({
  type: 'dark',
});

const lightTheme = createTheme({
  type: 'light',
});

function App() {
  const [checked, setChecked] = useState(false);

  const iconImgs = icons.map((icon, i) => (
    <Grid key={i}>
      <img src={icon.url} alt={icon} title={icon.title} className="tech-icon" />
    </Grid>
  ));

  return (
    <div className="App">
      <NextUIProvider theme={checked ? lightTheme : darkTheme}>
        <Background />
        <Head />
        <div className="content">
          <Grid.Container gap={3}>
            <Grid sm={6} xs={12}>
              <Card
                variant="flat"
                css={{
                  backdropFilter: 'saturate(200%) blur(8px)',
                  background: 'rgba(255, 255, 255, 0.2)',
                }}
              >
                <Card.Body>
                  <Text size="1.1rem">
                    Recent Full Stack graduate actively seeking to pivot into a
                    challenging and rewarding Front-End Development role. With
                    over 10+ years of work experience in customer facing roles,
                    and my recent education at Flatiron School of Engineering{' '}
                    <a
                      href={FlatCert}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (Certificate of completion found here)
                    </a>
                    , I am eager to translate my skills in Creativity, Critical
                    and Analytical Thinking, and Technical Aptitude to the
                    betterment of a Development Team. If you are looking for a
                    Flexible/Agile, Dependable/Trustworthy, and Industrious
                    Developer than contact me as we might be a good match.
                  </Text>
                </Card.Body>
              </Card>
            </Grid>

            <Grid sm={6} xs={12}>
              <Card
                css={{
                  backdropFilter: 'saturate(200%) blur(8px)',
                  background: 'rgba(255, 255, 255, 0.2)',
                }}
              >
                <Card.Header>Relevent Tech:</Card.Header>
                <Card.Divider />
                <Card.Body
                  css={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Grid.Container
                    gap="1"
                    css={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    {iconImgs}
                  </Grid.Container>
                </Card.Body>
              </Card>
            </Grid>
            <Grid sm={4} xs={12}>
              <Card
                css={{
                  backdropFilter: 'saturate(200%) blur(8px)',
                  background: 'rgba(255, 255, 255, 0.2)',
                }}
              >
                <Card.Body>
                  <Text>
                    I am proficient in building full-scale websites using React
                    and Ruby on Rails. I'm a full-stack (front-end leaning),
                    junior level developer. At the top-right of this segment
                    there is a link where you can download and view my resume.
                    Included on this page is a collection of personal projects
                    that I've worked on recently, which is consistently being
                    updated with new content, as well as a contact section if
                    you would like to contact me.
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
            <Grid sm={8} xs={12}>
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
                <Card.Body>
                  <Projects />
                </Card.Body>
              </Card>
            </Grid>
            <Grid sm={5} xs={12}>
              <Card
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
              </Card>
            </Grid>
            <Grid sm={7} xs={12}>
              <Card
                css={{
                  backdropFilter: 'saturate(200%) blur(8px)',
                  background: 'rgba(255, 255, 255, 0.2)',
                }}
              >
                <Card.Body>
                  <Text>
                    Since the moment I delved into the world of computers by
                    learning to customize MySpace themes as a child, a
                    fascination with computer science has stayed with me, and
                    now that passion carries me through every project I get to
                    work on. When my eyes aren't glued to a computer screen, you
                    can find me outside rock climbing, hiking, gardening, or in
                    the garage working on my latest wood working project.
                    Technologies which I use daily include React.js, HTML5,
                    CSS3, SCSS, JavaScript, Linux, Ruby, Ruby on Rails, VSCode,
                    Ubuntu, Github, and Netlify.
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </div>

        <div
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.2rem',
            zIndex: '1000',
          }}
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
      </NextUIProvider>
    </div>
  );
}

export default App;
