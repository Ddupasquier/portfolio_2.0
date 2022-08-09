import React from 'react';
import { Collapse, Text } from '@nextui-org/react';

function ProjectItem({ project, index }) {
  const techs = project.tech.map((tech, i) => (
    <>
      {tech}
      {i !== project.tech.length - 1 && ', '}
    </>
  ));

  return (
    <>
      {index === 0 ? (
        <Collapse title={project.title} expanded>
          <Text>{project.title}</Text>
          <Text>{project.description}</Text>
          <Text>{project.github}</Text>
          <Text>{project.live}</Text>
          {/* <img src={project.image} alt={project.title} /> */}
          <Text>{techs}</Text>
        </Collapse>
      ) : (
        <Collapse title={project.title}>
          <Text>{project.title}</Text>
          <Text>{project.description}</Text>
          <Text>{project.github}</Text>
          <Text>{project.live}</Text>
          {/* <img src={project.image} alt={project.title} /> */}
          <Text>{techs}</Text>
        </Collapse>
      )}
    </>
  );
}

export default ProjectItem;
