import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { HomePage, LoginPage, ContractPage, ProjectPage, SideBar } from "./import_helper";

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contracts" element={<ContractPage />} />
          <Route path="/settings" element={<LoginPage />} />
          <Route path="/projects" element={<ProjectPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
