import React from 'react';
import moment from "moment";
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { deleteProject } from '../store/actions/projectActions'


class ProjectSummary extends React.Component{

    handleDelete=(e)=>{
        const{project} = this.props;
        e.preventDefault();
        this.props.deleteProject(project.id);
        //this.props.history.push("/");
        console.log(this.state)
    }

    render(){
        const{project} = this.props;

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
                            onClick={this.handleDelete }
                        >delete</i>
                    </p>
                </div>
            </div>

        </div>
    )}
}

const mapDispatchToProps = dispatch => {
    return {
      deleteProject: (projectID) => dispatch(deleteProject(projectID))
    }
  }
 
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(ProjectSummary)
 