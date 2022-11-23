import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CustomerAbout from './app/CustomerAbout'
import CustomerList from './app/CustomerList'

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<CustomerList/>}/>
        <Route path="/customer/:id" element={<CustomerAbout/>}/>
      </Routes>
        
    </>
  )
}

export default App