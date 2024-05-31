import React from 'react'

import CPHeader from "../../components/CPHeader/CPHeader";
import ProjectTable from '../../components/ProjectTable/ProjectTable';
import Filter from '../../components/Filter/Filter';
import "./ProjectPage.css"

const ProjectPage = () => {
    return (
        <div className="project-page">
          <CPHeader name="Project" />
          <div className="filters-container">
          <Filter title="Project Type"/>
          <Filter title="Project Impact"/>
          <Filter title="Project Phase"/>
          <Filter title="Stage Type"/>
          <Filter title="Status Type"/>
          </div>
          <ProjectTable />
        </div>
      );
}

export default ProjectPage