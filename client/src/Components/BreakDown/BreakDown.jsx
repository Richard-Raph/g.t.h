import React from 'react'
import styles from "./breakdown.module.css"
import { PiWalletFill } from "react-icons/pi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";


function BreakDown() {
  return (
    <div>
          <div className={styles.container} >
            <div className={styles.iconcontainer}><PiWalletFill /></div>
            <p className={styles.p}>Total Balance</p>
            <p style={ {color: 'white', fontSize: '18px'} } >$33,120.54</p>
          </div>

         </div>
  )
}

export default BreakDown