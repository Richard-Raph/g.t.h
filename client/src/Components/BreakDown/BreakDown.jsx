import React from 'react'
import  "./breakdown.css"
import { PiWalletFill } from "react-icons/pi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";


function BreakDown() {

  const Breakdown = [
    {
     id: 1, icon: PiWalletFill, timeline: "This Month" , amount: "$10,540.43"
    },

    {
      id: 2, icon: RiMoneyDollarBoxFill, timeline: "This Week" , amount: "$501.065"
     },
  ]

  return (
    <main className='breakdown-align'>
          <section className='breakdown-container breakdown-container1' >
            <div className='breakdown-iconcontainer breakdown-iconcontainer1'><PiWalletFill size={15}/></div>
            <p className='breakdown-p'>Total Balance</p>
            <p style={ {color: 'white', fontSize: '16px', letterSpacing: '1px'} } >$33,120.54</p>
          </section>

          {Breakdown.map(({id, icon:Icon, timeline, amount})=>(
            <section className='breakdown-container breakdown-container2' key={id}>
            <div className='breakdown-iconcontainer breakdown-iconcontainer2'><Icon size={15}/></div>
            <p className='breakdown-p'>{timeline}</p>
            <p style={ {color: 'black', fontSize: '16px', letterSpacing: '1px'} }>{amount}</p>
          </section>

          ))}

         </main>
  )
}

export default BreakDown