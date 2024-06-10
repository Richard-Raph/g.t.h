import React from 'react'
import styles from "./analytics.module.css"
import arrow from "../../Assets/completearrow.png"
import person from "../../Assets/person.png"
import notification from "../../Assets/notification.png"
import BarChart from '../../Components/BarChart/BarChart'
import BreakDown from '../../Components/BreakDown/BreakDown'



function Analytics() {
  return (
    <div className={styles.container}>
      
      <input className={styles.search}
        type='text'
        placeholder='Search...'/>

      <div style={{display: 'flex', justifyContent: 'space-between'}}>

        <div className={styles.financial}>
          <img src={arrow} alt='navigation arrow'/>
          <p>Financial Analysis</p>
        </div>
        
        <div className={styles.notification}>
          <img src={notification} alt='notification icon'/>
          <img src={person} alt='person icon'/>
          <p>Dr Samuel.A</p>
        </div>

      </div>

      <div>

        <div>
         <BreakDown />
         <BarChart />
        </div>

        <div>
         <div></div>
         <div></div>
        </div>

      </div>
  
        </div>
  )
}

export default Analytics