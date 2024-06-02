import React from 'react'
import './Patients.css'
import { FaRegCalendarAlt, FaHandHoldingMedical, FaImages } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { GiHealthPotion } from "react-icons/gi";

const Patients = () => {
  
    return (
    <div className='patient'>
        <div className="patient-details">
            <div className="patient-detail">
                <h1>John Doe</h1>
                <p>johndoe@gmail.com</p>
                <p>+123-070-0000</p>
            </div>
            <div className="patient-med-record">
                <div className="med-record">
                    <FaHandHoldingMedical className='icons'/>
                    <p>Medical Record</p>
                </div>
                <div className="med-record">
                    <FaRegCalendarAlt className='icons'/>
                    <p>Appointment</p>
                </div>
                <div className="med-record">
                    <LiaFileInvoiceDollarSolid className='icons'/>
                    <p>Invoice</p>
                </div>
                <div className="med-record">
                    <MdPayment className='icons'/>
                    <p>Payment</p>
                </div>
                <div className="med-record">
                    <FaImages className='icons'/>
                    <p>Images</p>
                </div>
                <div className="med-record">
                    <GiHealthPotion className='icons'/>
                    <p>Health Information</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Patients