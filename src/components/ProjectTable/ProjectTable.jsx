import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEye } from "@fortawesome/free-solid-svg-icons";
import "./ProjectTable.css";

const ProjectTable = () => {
  return (
    <div className="projects">
      <table className="projects__table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Aprroved/Waived Phase</th>
            <th>Pending Certification Phase</th>
            <th>PCC Meeting Due Date</th>
            <th>Certification Stage</th>
            <th>Certification Stage Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HigherEd Horizon: Pioneering Education Excellence</td>

            <td>Initiation Approved</td>
            <td></td>
            <td></td>
            <td>PCC Review Approved</td>
            <td></td>
          </tr>
          <tr>
            <td>Court Harmony: Supreme Court Comission Endeavor</td>

            <td>Initiation Approved</td>
            <td></td>
            <td></td>
            <td>PCC Review Approved</td>
            <td></td>
          </tr>
          <tr>
            <td>DPS: Reinventing Public Safety through Advanced Technology</td>

            <td>Initiation</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              RetireGuard: Safeguarding Public Servants' Futures with the
              Retirement Association
            </td>

            <td>Initiation Approved</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Complete end to end Flow</td>

            <td>Initiation Approved</td>
            <td>Planning/Implementation</td>
            <td><span className="center-text">28 May 2024</span></td>
            <td>EPMO Review Pending</td>
            <td><span className="center-text-c">09 May 2024</span></td>
          </tr>
          <tr>
            <td>
              EmpowerAbility: Enhancing Accesibility and Inclusion for Persons
              with Disabilites
            </td>

            <td></td>
            <td>Initiation</td>
            <td><span className="center-text">28 May 2024</span></td>
            <td>EPMO Review Pending</td>
            <td><span className="center-text-c">09 May 2024</span></td>
          </tr>
          <tr>
            <td>Tourism Industry IT Infrastructure Project 2024</td>

            <td>Initiation Approved</td>
            <td>Initiation</td>
            <td><span className="center-text">28 May 2024</span></td>
            <td>EPMO Review Pending</td>
            <td><span className="center-text-c">09 May 2024</span></td>
          </tr>
          <tr>
            <td>The Taxation & Revenue Dept- Modernization Project</td>

            <td>Initiation Approved</td>
            <td>Planning</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              The Dept of Information Technology- Statewide Integrated Radio
              Communication
            </td>

            <td>Initiation Approved</td>
            <td>Planning</td>
            <td><span className="center-text">28 May 2024</span></td>
            <td>EPMO Review Pending</td>
            <td><span className="center-text-c">09 May 2024</span></td>
          </tr>
          <tr>
            <td>Journey Vista: State Tourism Thrive Initiative</td>

            <td>Initiation Approved</td>
            <td></td>
            <td><span className="center-text">26 June 2024</span></td>
            <td>EPMO Review Pending</td>
            <td><span className="center-text-c">07 June 2024</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
