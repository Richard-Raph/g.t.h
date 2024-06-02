import React from 'react'
import './MedRecord.css'
import { IoEyeOutline } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";

const MedRecord = () => {
  return (
    <div className='med-records'>
        <h1>Medical Record</h1>
        <button>New Entry</button>
        <div className="records">
          <div className="record">
            <h2>2nd, Feb 2024</h2>
            <h3>$15000</h3>
            <IoEyeOutline className='icon eye'/>
            <FaTrashCan className='icon trash'/>
            <p><span>Complaint:</span>Fever, Headache</p>
            <p><span>Diagnosis:</span>Malaria, Hypertension</p>
            <p><span>Treatment:</span>Surgery, Chemotherapy</p>
            <p><span>Prescription:</span>Paracetamol, Amoxicillin, Ibuprofen</p>
          </div>
          <div className="record">
            <h2>2nd, Feb 2024</h2>
            <h3>$15000</h3>
            <IoEyeOutline className='icon eye'/>
            <FaTrashCan className='icon trash'/>
            <p><span>Complaint:</span>Fever, Headache</p>
            <p><span>Diagnosis:</span>Malaria, Hypertension</p>
            <p><span>Treatment:</span>Surgery, Chemotherapy</p>
            <p><span>Prescription:</span>Paracetamol, Amoxicillin, Ibuprofen</p>
          </div>
          <div className="record">
            <h2>2nd, Feb 2024</h2>
            <h3>$15000</h3>
            <IoEyeOutline className='icon eye'/>
            <FaTrashCan className='icon trash'/>
            <p><span>Complaint:</span>Fever, Headache</p>
            <p><span>Diagnosis:</span>Malaria, Hypertension</p>
            <p><span>Treatment:</span>Surgery, Chemotherapy</p>
            <p><span>Prescription:</span>Paracetamol, Amoxicillin, Ibuprofen</p>
          </div>
        </div>

    </div>
  )
}

export default MedRecord