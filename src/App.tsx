import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import PersonalDetails from './components/PersonalDetails';
import Home from './components/Home';
import ResumeForm from './components/ResumeForm';
import { Box } from '@mui/material';

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/personaldetails' element={<PersonalDetails/>}></Route>
        <Route path='/resumeform' element={<ResumeForm/>}></Route>
        
      
      </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
