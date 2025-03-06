import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import StudentDetail from "./pages/StudentDetail";
import TeacherDetail from "./pages/TeacherDetail";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students/:id" element={<StudentDetail />} />
          <Route path="/teachers/:id" element={<TeacherDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
