import React from 'react'
import './transaction.css'
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import hero from '../../assets/hero.png'

function Transaction() {
    const TableHeader = ['Name', 'Payment Method', 'Treatment', 'Date', 'Status', 'Amount & Details'];

    const TableContent = [
        {
         id: 1,
         child: (
          <>
            <img src={hero} alt='a passport id' />
            <p>Samuel Ayomide</p>
          </>
         ), 
         PM: 'Online Payment',
         T: 'Surgery',
         D: 'Jan 2, 2022',
         S: 'Done',
         child2 : (
            <><p>$783.22</p>
            <PiDotsThreeVerticalBold size= {18} style={{color: 'black', fontWeight: '900'}}/>
            </>
         )
        },

        {
            id: 2,
            child: (
             <>
               <img src={hero} alt='a passport id'/>
               <p>Samuel Ayomide</p>
             </>
            ), 
            PM: 'Online Payment',
            T: 'Surgery',
            D: 'Jan 2, 2022',
            S: 'Done',
            child2 : (
               <><p>$783.22</p>
               <PiDotsThreeVerticalBold size= {18} style={{color: 'black', fontWeight: '900'}}/>
               </>
            )
           },

           {
            id: 3,
            child: (
             <>
               <img src={hero} alt='a passport id' />
               <p>Samuel Ayomide</p>
             </>
            ), 
            PM: 'Online Payment',
            T: 'Surgery',
            D: 'Jan 2, 2022',
            S: 'Done',
            child2 : (
               <><p>$783.22</p>
               <PiDotsThreeVerticalBold size= {18} style={{color: 'black', fontWeight: '900'}}/>
               </>
            )
           }
    ]
  return (
    <main className='transaction-container'>
     <p style={{fontSize: '14px'}}>Transaction History</p>
                <table>
                    <thead>
                        <tr>
                            {TableHeader.map((header)=> (
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TableContent.map(({id, child, PM, T, D, S, child2})=>(
                           <tr key={id}> 
                           <td className='child'>{child}</td>
                           <td>{PM}</td>
                           <td>{T}</td>
                           <td className='child1'>{D}</td>
                           <td >{S}</td>
                           <td className='child2'>{child2}</td>
                       </tr> 
                        ))}
                    </tbody>
                </table>
    </main>
  )
}

export default Transaction