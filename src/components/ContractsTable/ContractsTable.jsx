// ContractsTable.js
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import "./ContractsTable.css";

function ContractsTable() {
  return (
    <div className="contracts">
      <table className="contracts__table">
        <thead>
          <tr>
            <th>Action</th>
            <th>Contract Type</th>
            <th>Agreement No.</th>
            <th>Estimated Value</th>
            <th>Agency User</th>
            <th>Stage</th>
            <th>Status</th>
            <th>Add Amendment</th>
            <th>View Amendment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="action-btn">
              <button>
                <FontAwesomeIcon icon={faBars} className="table__icon"/>
              </button>
            </td>
            <td>Small Contract</td>
            <td>328</td>
            <td>$41,000.00</td>
            <td>Tom</td>
            <td>Draft</td>
            <td><span className="rp-chip">Review Pending</span></td>
            <td className="add-btn">
              <button>
                <FontAwesomeIcon icon={faPlus} className="table__icon"/>
              </button>
            </td>
            <td className="view-btn">
              <button>
                <FontAwesomeIcon icon={faEye} className="table__icon"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="action-btn">
              <button>
                <FontAwesomeIcon icon={faBars} className="table__icon"/>
              </button>
            </td>
            <td>Small Contract</td>
            <td>657</td>
            <td>$47,000.00</td>
            <td>Vishal</td>
            <td>Draft</td>
            <td><span className="a-chip">Approved</span></td>
            <td className="add-btn">
              <button>
                <FontAwesomeIcon icon={faPlus} className="table__icon"/>
              </button>
            </td>
            <td className="view-btn">
              <button>
                <FontAwesomeIcon icon={faEye} className="table__icon"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="action-btn">
              <button>
                <FontAwesomeIcon icon={faBars} className="table__icon"/>
              </button>
            </td>
            <td>Large Contract</td>
            <td>AGX-58-345</td>
            <td>$578,000.00</td>
            <td>Tyla</td>
            <td>Draft</td>
            <td><span className="p-chip">Pending</span></td>
            <td className="add-btn">
              <button>
                <FontAwesomeIcon icon={faPlus} className="table__icon"/>
              </button>
            </td>
            <td className="view-btn">
              <button>
                <FontAwesomeIcon icon={faEye} className="table__icon"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="action-btn">
              <button>
                <FontAwesomeIcon icon={faBars} className="table__icon"/>
              </button>
            </td>
            <td>Large Contract</td>
            <td>7943</td>
            <td>$950,000.00</td>
            <td>Milly</td>
            <td>Draft</td>
            <td><span className="p-chip">Pending</span></td>
            <td className="add-btn">
              <button>
                <FontAwesomeIcon icon={faPlus} className="table__icon"/>
              </button>
            </td>
            <td className="view-btn">
              <button>
                <FontAwesomeIcon icon={faEye} className="table__icon"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="action-btn">
              <button>
                <FontAwesomeIcon icon={faBars} className="table__icon"/>
              </button>
            </td>
            <td>Small Contract</td>
            <td>AGX-26739-8902</td>
            <td>$25,000.00</td>
            <td>Sam</td>
            <td>Draft</td>
            <td><span className="a-chip">Approved</span></td>
            <td className="add-btn">
              <button>
                <FontAwesomeIcon icon={faPlus} className="table__icon"/>
              </button>
            </td>
            <td className="view-btn">
              <button>
                <FontAwesomeIcon icon={faEye} className="table__icon"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="action-btn">
              <button>
                <FontAwesomeIcon icon={faBars} className="table__icon"/>
              </button>
            </td>
            <td>Small Contract</td>
            <td>AGX-26794-6379</td>
            <td>$30,000.00</td>
            <td>David</td>
            <td>Draft</td>
            <td><span className="r-chip">Reviewed</span></td>
            <td className="add-btn">
              <button>
                <FontAwesomeIcon icon={faPlus} className="table__icon"/>
              </button>
            </td>
            <td className="view-btn">
              <button>
                <FontAwesomeIcon icon={faEye} className="table__icon"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="action-btn">
              <button>
                <FontAwesomeIcon icon={faBars} className="table__icon"/>
              </button>
            </td>
            <td>Small Contract</td>
            <td>2389</td>
            <td>$24,000.00</td>
            <td>Cathy</td>
            <td>Draft</td>
            <td><span className="a-chip">Approved</span></td>
            <td className="add-btn">
              <button>
                <FontAwesomeIcon icon={faPlus} className="table__icon"/>
              </button>
            </td>
            <td className="view-btn">
              <button>
                <FontAwesomeIcon icon={faEye} className="table__icon"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="action-btn">
              <button>
                <FontAwesomeIcon icon={faBars} className="table__icon"/>
              </button>
            </td>
            <td>Large Contract</td>
            <td>68</td>
            <td>$89,000.00</td>
            <td>Andrew</td>
            <td>Draft</td>
            <td><span className="r-chip">Reviewed</span></td>
            <td className="add-btn">
              <button>
                <FontAwesomeIcon icon={faPlus} className="table__icon"/>
              </button>
            </td>
            <td className="view-btn">
              <button>
                <FontAwesomeIcon icon={faEye} className="table__icon"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="action-btn">
              <button>
                <FontAwesomeIcon icon={faBars} className="table__icon"/>
              </button>
            </td>
            <td>Small Contract</td>
            <td>AGX-345-1905</td>
            <td>$5,000.00</td>
            <td>Mary</td>
            <td>Draft</td>
            <td><span className="p-chip">Pending</span></td>
            <td className="add-btn">
              <button>
                <FontAwesomeIcon icon={faPlus} className="table__icon"/>
              </button>
            </td>
            <td className="view-btn">
              <button>
                <FontAwesomeIcon icon={faEye} className="table__icon"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="action-btn">
              <button>
                <FontAwesomeIcon icon={faBars} className="table__icon"/>
              </button>
            </td>
            <td>Small Contract</td>
            <td>AGX-5580-23</td>
            <td>$50,000.00</td>
            <td>John</td>
            <td>Draft</td>
            <td><span className="r-chip">Reviewed</span></td>
            <td className="add-btn">
              <button>
                <FontAwesomeIcon icon={faPlus} className="table__icon"/>
              </button>
            </td>
            <td className="view-btn">
              <button>
                <FontAwesomeIcon icon={faEye} className="table__icon"/>
              </button>
            </td>
          </tr>
          <tr>
            <td className="action-btn">
              <button>
                <FontAwesomeIcon icon={faBars} className="table__icon"/>
              </button>
            </td>
            <td>Large Contract</td>
            <td>94</td>
            <td>$100,000.00</td>
            <td>Bill</td>
            <td>Draft</td>
            <td><span className="p-chip">Pending</span></td>
            <td className="add-btn">
              <button>
                <FontAwesomeIcon icon={faPlus} className="table__icon"/>
              </button>
            </td>
            <td className="view-btn">
              <button>
                <FontAwesomeIcon icon={faEye} className="table__icon"/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContractsTable;
