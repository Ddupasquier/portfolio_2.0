import React, { lazy, Suspense } from 'react';
import { Collapse } from '@nextui-org/react';
import { projectItems } from '../../data/projects';

const ProjectItem = lazy(() => import('./ProjectItem'));
// import ProjectItem from ;

function Projects() {
  return (
    <Collapse.Group divider="true">
      {projectItems.map((project, index) => (
        <Suspense key={index} fallback={<div>Loading...</div>}>
          <ProjectItem project={project} index={index} />
        </Suspense>
      ))}
    </Collapse.Group>
  );
}

export default Projects;
