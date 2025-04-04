'use client'
import ProjectModal from './ProjectModal'
import { useState } from 'react'
const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Медцентр "Мед.Студио"',
      tags: ['HTML', 'CSS', 'JS', 'BEM'],
      description: 'Сайт-визитка на HTML CSS JS',
      fullDescription: 'Сайт-визитка на HTML CSS JS',
      image: '/medtest.jpg',
      techStack: ['HTML', 'CSS', 'JS', 'BEM'],
    },
    {
      id: 2,
      title: 'Сайт Портфолио',
      tags: ['NextJS', 'React', 'Tailwind'],
      description: 'Сайт Портфолио.',
      fullDescription: 'Сайт Портфолио.',
      image: '/readmeImg.jpg',
      techStack: ['NextJS', 'React', 'Tailwind', 'PayloadCMS', 'Postgres'],
    },
    {
      id: 3,
      title: 'Магазин страйкбольного снаряжения',
      tags: ['HTML', 'CSS', 'JS'],
      description: 'Сайт-визитка на HTML CSS JS.',
      fullDescription: 'Сайт-визитка на HTML CSS JS.',
      image: '/bfg-store.jpg',
      techStack: ['HTML', 'CSS', 'JS'],
    },
    {
      id: 4,
      title: 'Погода онлайн',
      tags: ['React', 'Openweathermap', 'Axios'],
      description: 'Приложение "погода онлайн"',
      fullDescription: 'Приложение "погода онлайн"',
      image: '/weather.png',
      techStack: ['React', 'Openweathermap', 'Axios'],
    },
    {
      id: 5,
      title: 'Список задач',
      tags: ['TS', 'React'],
      description: 'Список задач.',
      fullDescription: 'Список задач.',
      image: '/todo.png',
      techStack: ['TS', 'React'],
    },
    {
      id: 6,
      title: 'Сайт Портфолио',
      tags: ['Bootstrap 5', 'HTML'],
      description: 'Сайт Портфолио.',
      fullDescription: 'Сайт Портфолио.',
      image: '/bootstrap.png',
      techStack: ['Bootstrap 5', 'HTML'],
    },
  ]

  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = id => {
    setSelectedProject(id)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  const handleNextProject = () => {
    const currentIndex = projects.findIndex(project => project.id === selectedProject)

    if (currentIndex === -1) {
      return null
    }

    const nextIndex = (currentIndex + 1) % projects.length

    setSelectedProject(projects[nextIndex].id)
  }

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex(project => project.id === selectedProject)

    if (currentIndex === -1) {
      return null
    }

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length

    setSelectedProject(projects[prevIndex].id)
  }

  return (
    <section id='projects' className='px-4 py-32 sm:px-6 lg:px-8'>
      <h2 className='text-3xl font-bold text-white mb-12 text-center'>Мои работы</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {projects.map((project, index) => (
          <button
            onClick={() => handleProjectClick(project.id)}
            key={index}
            className='bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-primary-500/50 transition-colors hover:shadow-sm text-left'
          >
            <div className='flex flex-col h-full'>
              <h3 className='text-lg font-semibold text-white mb-2'>{project.title}</h3>
              <div className='flex flex-wrap gap-1 mt-auto'>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='px-2 py-0.5 text-xs rounded-full bg-primary-500/20 text-primary-200 border border-primary-500/30 '
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={projects.find(project => project.id === selectedProject)}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  )
}

export default ProjectSection
