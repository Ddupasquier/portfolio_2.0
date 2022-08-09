import React from 'react';
// import collapse from next ui
import { Collapse } from '@nextui-org/react';
import ProjectItem from './ProjectItem';

function Projects() {
  const projectItems = [
    {
      title: 'SimpleStyles',
      description: 'A simple stylesheet library for React.',
      github: 'https://github.com/Ddupasquier/phase-5-cssreact-library',
      live: 'https://simplestyles.herokuapp.com/',
      image: 'https://i.ibb.co/KFXV3g0/abstract-lines-1.png',
      tech: [
        'React.js',
        'Ruby on Rails',
        'PostgreSQL',
        'HTML',
        'CSS',
        'JavaScript',
        'SCSS',
        'Git',
        'Github',
        'Heroku',
        'Postman',
      ],
    },
    {
      title: 'PokeDex',
      description: 'A React app to display a list of Pokemon.',
      github: 'https://github.com/Ddupasquier/Pokedex-1.0',
      live: 'https://pokedex-fi.herokuapp.com/',
      image: 'https://i.ibb.co/KFXV3g0/abstract-lines-1.png',
      tech: ['JavaScript', 'HTML', 'SCSS', 'Git', 'Github', 'Heroku'],
    },
    {
      title: 'National Parks',
      description: 'A React app to display a list of National Parks.',
      github: 'https://github.com/Ddupasquier/phase-4-project-mincho-dylandupasquier',
      live: 'https://national-parks-fi.herokuapp.com/',
      image: 'https://i.ibb.co/KFXV3g0/abstract-lines-1.png',
      tech: [
        'React.js',
        'Ruby on Rails',
        'PostgreSQL',
        'HTML',
        'CSS',
        'JavaScript',
        'SCSS',
        'Git',
        'Github',
        'Heroku',
        'Netlify',
        'Postman',
      ],
    },
  ];

  return (
    <Collapse.Group accordion="false">
      {projectItems.map((project, index) => (
        <ProjectItem key={index} project={project} index={index}/>
      ))}
    </Collapse.Group>
  );
}

export default Projects;
