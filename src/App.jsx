import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import { HomePage, AboutPage, LoginPage, ContactPage } from "./import_helper";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
