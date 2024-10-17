'use client'
import {createContext} from 'react';
import './stylesheets/globals.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import UploadPage from './pages/uploadPage';
import ReportPage from './pages/reportPage';
import PatientDataPage from './pages/patientDataPage';

export default function page() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pages/uploadPage' element={<UploadPage/>}/>
        <Route path='/pages/reportPage' element={<ReportPage/>}/>
        <Route path='/pages/patientDataPage' element={<PatientDataPage/>}/>
      </Routes>
    </Router>
  );
}