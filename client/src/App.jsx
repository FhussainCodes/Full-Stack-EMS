import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginLanding from './pages/LoginLanding.jsx';
import Layout from './pages/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Attendance from './pages/Attendance.jsx';
import Employees from './pages/Employees.jsx';
import Leave from './pages/Leave.jsx';
import PaySlips from './pages/PaySlips.jsx';
import Settings from './pages/Settings.jsx';
import PrintPayslip from './pages/PrintPayslip.jsx';

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={< LoginLanding />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<PaySlips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/payslips/:id" element={< PrintPayslip />} />
        <Route path="*" element={< Navigate to="/dashboard" replace />} />
      </Routes>



    </>
  )
}

export default App

