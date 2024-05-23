import React from 'react'

import CPHeader from "../../components/CPHeader/CPHeader";
import ProjectTable from '../../components/ProjectTable/ProjectTable';
import "./ProjectPage.css"

const ProjectPage = () => {
    return (
        <div className="project-page">
          <CPHeader name="Project" />
          <ProjectTable />
        </div>
      );
}

export default ProjectPage