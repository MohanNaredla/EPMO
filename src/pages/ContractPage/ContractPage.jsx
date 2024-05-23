import React from "react";

import CPHeader from "../../components/CPHeader/CPHeader";
import ContractsTable from "../../components/ContractsTable/ContractsTable";
import "./ContractPage.css";

const ContractPage = () => {
  return (
    <div className="contract-page">
      <CPHeader name="Contract" />
      <ContractsTable />
    </div>
  );
};

export default ContractPage;
