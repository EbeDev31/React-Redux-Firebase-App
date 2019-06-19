import React from 'react';
import ProjectSummary from "./ProjectSummary"

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return (
          <div>
            <ProjectSummary project={project} />
          </div>
        )
      })}
    </div>
  )
}

export default ProjectList;
