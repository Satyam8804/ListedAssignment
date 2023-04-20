import "./App.css";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login.js";
import React from "react";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
