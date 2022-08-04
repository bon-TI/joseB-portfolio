import React from 'react'
import ProjectsContent from '../components/projects/ProjectsContent';

function Projects() {
  return (
    <div className='w-full pt-20 flex flex-col'>
      <div className="w-full h-10 flex justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            <span className="text-torch-500">My</span>
            <span className="text-torch-200"> Projects</span>
          </h1>
          <p className="py-2">
            These are some of the projects I have done
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <ProjectsContent />
      </div>
    </div>
  )
}

export default Projects;