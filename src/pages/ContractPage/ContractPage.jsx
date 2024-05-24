import React from "react";

import CPHeader from "../../components/CPHeader/CPHeader";
import ContractsTable from "../../components/ContractsTable/ContractsTable";
import "./ContractPage.css";
import Filter from "../../components/Filter/Filter";

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
      <ContractsTable />
    </div>
  );
};

export default ContractPage;
