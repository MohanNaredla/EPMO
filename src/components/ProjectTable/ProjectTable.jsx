import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faEye } from "@fortawesome/free-solid-svg-icons";
import "./ProjectTable.css";
import data from "./ProjectData";

const ProjectTable = () => {
  return (
    <div className="projects">
      <table className="projects__table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Aprroved Phase</th>
            <th>Pending Certification Phase</th>
            <th>PCC Meeting Due Date</th>
            <th>Certification Stage</th>
            <th>Certification Stage Due Date</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((dat) => {
              return (
                <tr key={dat.id}>
                <td><span className="project-name">{dat.name}</span></td>
                <td><span className="approved-phase">{dat.approved_phase}</span></td>
                <td><span className="pending-phase">{dat.pending_certification_phase}</span></td>
                <td><span className="center-text">{dat.pcc_due_meeting_date}</span></td>
                <td><span className="cert">{dat.certification_stage}</span></td>
                <td><span className="center-text-c">{dat.certifications_stage_due_date}</span></td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
