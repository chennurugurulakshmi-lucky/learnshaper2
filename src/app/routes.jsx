import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import LearnerCourses from "../pages/learner/Courses";
import Enroll from "../pages/learner/Enroll";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/learner/courses" element={<LearnerCourses />} />
      <Route path="/enroll/:courseName" element={<Enroll />} />
      
    </Routes>
  );
}