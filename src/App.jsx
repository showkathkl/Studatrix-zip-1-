import React from "react";
import { Routes, Route } from "react-router-dom";

import First from "./components/First";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

/* Scholar */
import Scholardashboard from "./pages/Scholardashboard";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AcademicRecords from "./pages/AcademicRecords";
import Attendance from "./pages/Attendance";
import FeePayments from "./pages/FeePayments";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";

/* Admin */
import AdminDashboardLayout from "./pages/admin/AdminDashboardLayout";
import AdminHome from "./pages/admin/AdminHome";
import AdminProfile from "./pages/admin/AdminProfile";
import ManageStudents from "./pages/admin/ManageStudents";
import ManageTeachers from "./pages/admin/ManageTeachers";
import ManageCourses from "./pages/admin/ManageCourses";
import Reports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/AdminSettings";

/* Teacher */
import TeacherLayout from "./pages/teacher/TeacherLayout";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import Students from "./pages/teacher/Students";
import Classes from "./pages/teacher/Classes";
import TeacherReports from "./pages/teacher/Reports";
import TeacherProfile from "./pages/teacher/profile";

/* Parent */
import ParentDashboard from "./pages/parent/ParentDashboard";
import Children from "./pages/parent/Children";
import ParentAttendance from "./pages/parent/Attendance";
import ParentProfile from "./pages/parent/Profile";
import ParentLayout from "./pages/parent/ParentLayout";

import Fee from "./pages/parent/Fee";


function App() {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<First />} />

      {/* LOGIN */}
      <Route path="/login" element={<Login />} />

      {/* REGISTER */}
      <Route path="/register" element={<Register />} />


      {/* SCHOLAR DASHBOARD */}
      <Route
        path="/scholar-dashboard"
        element={
          <ProtectedRoute allowedRole="scholar">
            <Scholardashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="academic-records" element={<AcademicRecords />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="fee-payments" element={<FeePayments />} />
        <Route path="courses" element={<Courses />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="settings" element={<Settings />} />
      </Route>


      {/* ADMIN DASHBOARD */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminHome />} />
        <Route path="profile" element={<AdminProfile />} />
        <Route path="students" element={<ManageStudents />} />
        <Route path="teachers" element={<ManageTeachers />} />
        <Route path="courses" element={<ManageCourses />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>


      {/* TEACHER DASHBOARD */}
      <Route
        path="/teacher-dashboard"
        element={
          <ProtectedRoute allowedRole="teacher">
            <TeacherLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<TeacherDashboard />} />
        <Route path="profile" element={<TeacherProfile />} />
        <Route path="students" element={<Students />} />
        <Route path="classes" element={<Classes />} />
        <Route path="reports" element={<TeacherReports />} />
      </Route>


      {/* PARENT DASHBOARD */}
      <Route
        path="/parent-dashboard"
        element={
          <ProtectedRoute allowedRole="parent">
            <ParentLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<ParentDashboard />} />
        <Route path="children" element={<Children />} />
        <Route path="attendance" element={<ParentAttendance />} />
        <Route path="fee" element={<Fee />} />
        <Route path="profile" element={<ParentProfile />} />
      </Route>

    </Routes>
  );
}

export default App;