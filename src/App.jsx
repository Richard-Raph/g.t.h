import React from 'react'
import './App.css'
import Patients from './Components/Patients/Patients'
import MedRecord from './Components/MedRecord/MedRecord'

function App() {

  return (
    <>
      <div className='components'>
      <Patients />
      <MedRecord />
      </div>
    </>
  )
}

export default App
