import React from 'react'
import { FaGithub } from 'react-icons/fa';

function Projects() {
  // return (
    const projectList = [
      {
        id: 1,
        title: 'Car-rental',
        description: 'A task management application with features like adding, editing, and deleting tasks. Built with HTML,CSS',
        technologies: 'HTML, CSS',
        githubLink: 'https://github.com/SAQIB-ALI-30/Car-rental',
        style: 'shadow-white'
      },
      {
        id: 2,
        title: 'banna-dalo',
        description: 'A full-stack e-commerce platform with user authentication, product listing, shopping cart, and payment integration.',
        technologies: 'HTML, CSS, PHP',
        githubLink: 'https://github.com/SAQIB-ALI-30/banna-dalo',
      },
      {
        id: 3,
        title: 'Django-form',
        description: 'A personal form website showcasing my skills and projects, built using Python and HTML, CSS.',
        technologies: 'Python, HTML. CSS',
        githubLink: 'https://github.com/SAQIB-ALI-30/Django-form',
      },
    ];
  
    return (
      <div name='Projects' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
          </div>
  
          <div className='grid sm:grid-cols-2 gap-8'>
            {projectList.map(({ id, title, description, technologies, githubLink, style }) => (
              <div key={id} className='bg-gray-700 p-4 rounded-lg shadow-md shadow-white'>
                <h3 className='text-2xl font-bold mb-2'>{title}</h3>
                <p className='mb-2'>{description}</p>
                <p className='text-sm mb-4 text-gray-400'>Technologies: {technologies}</p>
                <a href={githubLink} target='_blank' rel='noopener noreferrer' className='text-blue-400 flex items-center'>
                  <FaGithub size={20} className='mr-2' /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Projects