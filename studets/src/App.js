import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
import Home from "./PAGES/Home";

import AddStudent from "./PAGES/addStudent";

import EditStudetn from "./PAGES/EditStudent";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/edit-student/:studentId" element={<EditStudetn/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
