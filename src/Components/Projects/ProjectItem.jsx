import React from 'react';
import { Collapse, Text } from '@nextui-org/react';

function ProjectItem({ project }) {
  const techs = project.tech.map((tech, i) => (
    <React.Fragment key={i}>
      {tech}
      {i !== project.tech.length - 1 && ', '}
    </React.Fragment>
  ));

  return (
    <>
      <Collapse title={project.title} subtitle={project.description}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div>
            <Text>
              Github:{' '}
              <a href={project.github} target="_blank" rel="noreferrer">
                {project.github}
              </a>
            </Text>
            <Text>
              Live:{' '}
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-disabled="true"
              >
                {project.live}
              </a>
            </Text>
            <Text>{techs}</Text>
          </div>

          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              style={{
                alignSelf: 'center',
                maxWidth: '50vw',
                aspectRatio: '1/1',
              }}
            />
          )}
        </div>
      </Collapse>
    </>
  );
}

export default ProjectItem;
