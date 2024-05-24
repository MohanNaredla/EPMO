import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEye } from '@fortawesome/free-solid-svg-icons';
import "./ProjectTable.css"

const ProjectTable = () => {
  return (
    <div className="projects">
      <table className='projects__table'>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Actions</th>
            <th>View Contracts</th>
            <th>Aprroved/Waived Phase</th>
            <th>Pending Certification Phase</th>
            <th>PCC Meeting Due Date</th>
            <th>Certification Stage</th>
            <th>Certification Stage Due Date</th>
            <th>Certification Exception Stage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>HigherEd Horizon: Pioneering Education Excellence</td>
            <td className='action-btn'><button><FontAwesomeIcon icon={faBars} /></button></td>
            <td className='view-btn'><button><FontAwesomeIcon icon={faEye} /></button></td>
            <td>Initiation Approved</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>PCC Review Approved</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Court Harmony: Supreme Court Comission Endeavor</td>
            <td className='action-btn'><button><FontAwesomeIcon icon={faBars} /></button></td>
            <td className='view-btn'><button><FontAwesomeIcon icon={faEye} /></button></td>
            <td>Initiation Approved</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>PCC Review Approved</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>DPS: Reinventing Public Safety through Advanced Technology</td>
            <td className='action-btn'><button><FontAwesomeIcon icon={faBars} /></button></td>
            <td className='view-btn'><button><FontAwesomeIcon icon={faEye} /></button></td>
            <td>Initiation</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>RetireGuard: Safeguarding Public Servants' Futures with the Retirement Association</td>
            <td className='action-btn'><button><FontAwesomeIcon icon={faBars} /></button></td>
            <td className='view-btn'><button><FontAwesomeIcon icon={faEye} /></button></td>
            <td>Initiation Approved</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Complete end to end Flow</td>
            <td className='action-btn'><button><FontAwesomeIcon icon={faBars} /></button></td>
            <td className='view-btn'><button><FontAwesomeIcon icon={faEye} /></button></td>
            <td>Initiation Approved</td>
            <td>Planning</td>
            <td>05/28/2024</td>
            <td>EPMO Review Pending</td>
            <td>05/09/2024</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>EmpowerAbility: Enhancing Accesibility and Inclusion for Persons with Disabilites</td>
            <td className='action-btn'><button><FontAwesomeIcon icon={faBars} /></button></td>
            <td className='view-btn'><button><FontAwesomeIcon icon={faEye} /></button></td>
            <td>N/A</td>
            <td>Initiation</td>
            <td>05/28/2024</td>
            <td>EPMO Review Pending</td>
            <td>05/09/2024</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Tourism Industry IT Infrastructure Project 2024</td>
            <td className='action-btn'><button><FontAwesomeIcon icon={faBars} /></button></td>
            <td className='view-btn'><button><FontAwesomeIcon icon={faEye} /></button></td>
            <td>Initiation Approved</td>
            <td>Initiation</td>
            <td>05/28/2024</td>
            <td>EPMO Review Pending</td>
            <td>05/09/2024</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>The Taxation & Revenue Dept- Modernization Project</td>
            <td className='action-btn'><button><FontAwesomeIcon icon={faBars} /></button></td>
            <td className='view-btn'><button><FontAwesomeIcon icon={faEye} /></button></td>
            <td>Initiation Approved</td>
            <td>Planning/Implementation</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>The Dept of Information Technology- Statewide Integrated Radio Communication</td>
            <td className='action-btn'><button><FontAwesomeIcon icon={faBars} /></button></td>
            <td className='view-btn'><button><FontAwesomeIcon icon={faEye} /></button></td>
            <td>Initiation Approved</td>
            <td>Planning</td>
            <td>05/28/2024</td>
            <td>EPMO Review Pending</td>
            <td>05/09/2024</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Journey Vista: State Tourism Thrive Initiative</td>
            <td className='action-btn'><button><FontAwesomeIcon icon={faBars} /></button></td>
            <td className='view-btn'><button><FontAwesomeIcon icon={faEye} /></button></td>
            <td>Initiation Approved</td>
            <td>N/A</td>
            <td>06/26/2024</td>
            <td>EPMO Review Pending</td>
            <td>06/07/2024</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProjectTable