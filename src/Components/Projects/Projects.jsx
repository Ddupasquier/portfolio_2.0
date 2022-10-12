import React from 'react';
import { Collapse } from '@nextui-org/react';
import ProjectItem from './ProjectItem';
import { projectItems } from '../../data/projects';

function Projects() {
  return (
    <Collapse.Group divider="true">
      {projectItems.map((project, index) => (
        <ProjectItem key={index} project={project} index={index} />
      ))}
    </Collapse.Group>
  );
}

export default Projects;
