import React from 'react';
import moment from "moment"

const ProjectSummary =({project})=> {
  return (
      
        <div className="card z-depth=0 project-summary">
            <div className="card z-depth=0 project-summary">
                <span className="card-title">{project.title}</span>    
                <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">Created {moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary