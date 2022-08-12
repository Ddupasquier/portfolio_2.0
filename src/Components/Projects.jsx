import React from 'react';
import { Collapse } from '@nextui-org/react';
import ProjectItem from './ProjectItem';

import simpleStyle from '../assets/simplestyles.gif';
import pokedex from '../assets/pokedex1.0.gif';
import nationalParks from '../assets/nationalpark.gif';
import marcusBot from '../assets/marcusBot.gif';

function Projects() {
  const projectItems = [
    {
      title: 'MarcusBot (Sneak Peak)',
      description:
        'A social media management took which allows users to interact with other users and maintain hands free interactions.',
      github: 'Under Construction',
      live: 'Under Construction',
      image: marcusBot,
      tech: [
        'React.js',
        'Redux',
        'JavaScript',
        'SCSS',
        'NextUI',
        'Ruby on Rails',
        'PostgreSQL',
        'AWS',
        'Heroku',
        'Netflify',
        'JWT',
        'BCrypt',
        'Selenium',
        'Git',
        'Github',
      ],
    },
    {
      title: 'SimpleStyles',
      description: 'A simple stylesheet library for React.',
      github: 'https://github.com/Ddupasquier/phase-5-cssreact-library',
      live: 'https://simplestyles.herokuapp.com/',
      image: simpleStyle,
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
        'BCrypt',
      ],
    },
    {
      title: 'PokeDex',
      description: 'A React app to display a list of Pokemon.',
      github: 'https://github.com/Ddupasquier/Pokedex-1.0',
      live: 'https://pokedex-fi.herokuapp.com/',
      image: pokedex,
      tech: ['JavaScript', 'HTML', 'SCSS', 'Git', 'Github', 'Heroku'],
    },
    {
      title: 'National Parks',
      description: 'A React app to display a list of National Parks.',
      github:
        'https://github.com/Ddupasquier/phase-4-project-mincho-dylandupasquier',
      live: 'https://national-parks-fi.herokuapp.com/',
      image: nationalParks,
      tech: [
        'React.js',
        'Ruby on Rails',
        'PostgreSQL',
        'HTML',
        'CSS',
        'JavaScript',
        'Git',
        'Github',
        'Heroku',
        'Postman',
        'BCrypt',
      ],
    },
  ];

  return (
    <Collapse.Group accordion="true" divider="false">
      {projectItems.map((project, index) => (
        <ProjectItem key={index} project={project} index={index} />
      ))}
    </Collapse.Group>
  );
}

export default Projects;
