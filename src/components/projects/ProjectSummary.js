import React from 'react';
import moment from "moment";
import { Link } from "react-router-dom"


const ProjectSummary = ({ project }) => {
    return (

        <div className="card z-depth=0 project-summary">
            <div className="proj-card">
                <div className="card z-depth=0 proj-details">
                    <Link to={'/project/' + project.id} key={project.id}>
                        <span className="card-title">{project.title}</span>
                        <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                        <p className="grey-text">Created {moment(project.createdAt.toDate()).calendar()}</p>
                    </Link>
                </div>


                <div className="proj-delete">
                    <p>
                        <i class="medium material-icons"
                            onClick={() => { alert("On it!!") }}
                        >delete</i>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ProjectSummary