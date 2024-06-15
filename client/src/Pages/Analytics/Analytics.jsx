import React from 'react'
import "./analytics.css"
import arrow from "../../assets/completearrow.png"
import person from "../../assets/person.png"
import notification from "../../assets/notification.png"
import BarChart from '../../Components/BarChart/BarChart'
import BreakDown from '../../Components/BreakDown/BreakDown'
import DonoughtDiv from '../../Components/DoughnutDIv/DoughnutDiv'
import Calender from '../../Components/Calendar/Calendar'
import Transaction from '../../Components/Transaction/Transaction'



function Analytics() {
  return (
    <main className='analytics-container'>
      
      <input className='analytics-search'
        type='text'
        placeholder='Search...'/>

      <section style={{display: 'flex', justifyContent: 'space-between'}}>

        <div className='analytics-financial'>
          <img src={arrow} alt='navigation arrow'/>
          <p>Financial Analysis</p>
        </div>
        
        <div className='analytics-notification'>
          <img src={notification} alt='notification icon'/>
          <img src={person} alt='person icon'/>
          <p>Dr Samuel.A</p>
        </div>

      </section>

      <section className='analytics-align'>

        <div className='analytics-align1'>
         <BreakDown />
         <BarChart />
        </div>

        <div className='analytics-align2'>
         <DonoughtDiv />
         <Calender />
        </div>

      </section>

      <section>
        <Transaction />
      </section>
  
        </main>
  )
}

export default Analytics