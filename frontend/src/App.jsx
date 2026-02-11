import React from 'react'

import './App.css'
import Dashboard from './pages/employee/Dashboard'
import LoanView from './pages/employee/LoanView'
import NavEmployee from './pages/employee/NavEmployee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Emi from './pages/employee/Emi'
import Pay from './pages/employee/pay'

function App() {
  
  return (
    <>
     <BrowserRouter>
     <NavEmployee/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/loanview" element={<LoanView/>} />
        <Route path='/emi'element={<Emi/>}/>
        <Route path='/pay' element={<Pay/>}/>
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
