import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import HomeScreen from './components/home.jsx'
import Nav_bar from './components/navbar.jsx';
import Student_signin from './components/student-signin.jsx';
import Teacher_signin from './components/teacher-signin.jsx';
import Admin_signin from './components/admin-signing.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Nav_bar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/student_signin" element={<Student_signin />} />
        <Route path="/teacher_signin" element={<Teacher_signin />} />
        <Route path="/admin_signin" element={<Admin_signin />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
