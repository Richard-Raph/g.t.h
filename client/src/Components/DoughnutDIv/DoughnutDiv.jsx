import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import "./doughnutdiv.css"

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutDiv = () => {
  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#20C997', '#EB5757'],
        borderWidth: -10,
        borderColor: '#fff',
        borderAlign: 'inner',
        spacing: -25,
        borderRadius: {
          outerStart: 50, 
          innerStart: 50, 
          outerEnd: 50, 
          innerEnd: 50
        },
      },
    ],
  };

  const options = {
    cutout: '73%',
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          font: {
            size: 9,
            weight: 600,
          },
          padding: 8,
          boxWidth: 8,
          boxHeight: 8,
        },
      },
    },
  };

  return (
     <main className='doughnut-container'>
    <section className='doughnut-align'>
      <Doughnut data={data} options={options} />
      <div className='doughnut-align1'>
        78.90%
      </div>
    </section>

    <section className='dropdown-menu'>
      <select className='select1'>
      <option value='' disabled selected hidden>
        This month Income Analysis</option>
      <option value='income1'>Income Option 1</option>
      </select>

      <select className='select2'>
      <option value='' disabled selected hidden>
        This month Expense Analysis</option>
      <option value='expense1'>Expense Option 1</option>
      </select>
    </section>
    </main>
  );
};

export default DoughnutDiv;
