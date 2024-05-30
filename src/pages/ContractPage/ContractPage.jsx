import React from "react";

import CPHeader from "../../components/CPHeader/CPHeader";
import ContractsTable from "../../components/ContractsTable/ContractsTable";
import "./ContractPage.css";
import Filter from "../../components/Filter/Filter";
import ContractCard from "../../components/ContractCard/ContractCard";
import TableButton from "../../components/TableButton/TableButton";
import { faBars, faEye, faPlus } from "@fortawesome/free-solid-svg-icons";

const ContractPage = () => {
  const contractType = [
    { value: "smallcontract", label: "Small Contract" },
    { value: "largecontract", label: "Large Contract" },
  ];

  const stageType = [
    { value: "draft", label: "Draft" },
    { value: "doitreview", label: "DoIT Review" },
  ];

  const status = [
    { value: "approved", label: "Approved" },
    { value: "reviewpending", label: "Review Pending" },
    { value: "pending", label: "Pending" },
  ];

  return (
    <div className="contract-page">
      <CPHeader name="Contract" />
      <div className="filters-container-c">
        <Filter title="Contract Type" options={contractType} />
        <Filter title="Contract Type" options={contractType} />
        <Filter title="Stage Type" options={stageType} />
        <Filter title="Status Type" options={status} />
      </div>
      <div className="table-buttons">
        <TableButton name="Actions" icon={faBars} class="table-button"/>
        <TableButton name="Add Amendment" icon={faPlus} class="light-buttons"/>
        <TableButton name="View Amendment" icon={faEye} class="light-buttons"/>     
      </div>
      <ContractsTable />
      <ContractCard amount="$41,000.00" status="Review Pending" number="328" user="Tom" type="Small Contract" stage="Draft" class="rp-chip-c"/>
      <ContractCard amount="$47,000.00" status="Approved" number="657" user="Vishal" type="Small Contract" stage="Draft" class="a-chip-c"/>
      <ContractCard amount="$578,000.00" status="Pending" number="AGX-58-345" user="Tyla" type="Large Contract" stage="Draft" class="p-chip-c"/>
      <ContractCard amount="$950,000.00" status="Pending" number="7943" user="Milly" type="Large Contract" stage="Draft" class="p-chip-c"/>
      <ContractCard amount="$25,000.00" status="Approved" number="AGX-26739-8902" user="Sam" type="Small Contract" stage="Draft" class="a-chip-c"/>
      <ContractCard amount="$30,000.00" status="Reviewed" number="AGX-26794-6379" user="David" type="Small Contract" stage="Draft" class="r-chip-c"/>
      <ContractCard amount="$24,000.00" status="Approved" number="2389" user="Cathy" type="Small Contract" stage="Draft" class="a-chip-c"/>
      <ContractCard amount="$89,000.00" status="Reviewed" number="68" user="Andrew" type="Large Contract" stage="Draft" class="r-chip-c"/>
      <ContractCard amount="$599,000.00" status="Pending" number="AGX-345-1905" user="Mary" type="Small Contract" stage="Draft" class="p-chip-c"/>
      <ContractCard amount="$50,000.00" status="Reviewed" number="AGX-5580-23" user="John" type="Small Contract" stage="Draft" class="r-chip-c"/>
      <ContractCard amount="$100,000.00" status="Pending" number="94" user="Bill" type="Large Contract" stage="Draft" class="p-chip-c"/>
    </div>
  );
};

export default ContractPage;
