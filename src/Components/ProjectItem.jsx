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
      <Collapse title={project.title}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div>
            <Text>{project.title}</Text>
            <Text>{project.description}</Text>
            <Text>
              Github:{' '}
              <a href={project.github} target="_blank" rel="noreferrer">
                {project.github}
              </a>
            </Text>
            <Text>
              Live:{' '}
              <a href={project.live} target="_blank" rel="noreferrer">
                {project.live}
              </a>
            </Text>
            <Text>{techs}</Text>
          </div>
          <img
            src={project.image}
            alt={project.title}
            style={{ maxHeight:'30vh' }}
          />
        </div>
      </Collapse>
    </>
  );
}

export default ProjectItem;
