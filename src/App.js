import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CustomerList from './app/CustomerList'

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<CustomerList/>}/>
      </Routes>
        
    </>
  )
}

export default App