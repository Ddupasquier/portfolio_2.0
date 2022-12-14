import React, { Suspense } from 'react';
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
        <Suspense fallback={<div>Loading...</div>}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div style={{ flex: '6' }}>
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
              // <img
              //   src={project.image}
              //   alt={project.title}
              //   style={{
              //     alignSelf: 'center',
              //     maxWidth: '50vw',
              //     aspectRatio: '1/1',
              //   }}
              // />
              <div
                style={{ display: 'flex', flex: '6', justifyContent: 'center' }}
              >
                <video controls width="400">
                  <source src={project.image} type="video/webm" />
                </video>
              </div>
            )}
          </div>
        </Suspense>
      </Collapse>
    </>
  );
}

export default ProjectItem;
