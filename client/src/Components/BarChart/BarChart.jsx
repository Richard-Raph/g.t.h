// src/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './barchart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '', // Remove the label
                data: [62, 70, 25, 88],
                backgroundColor: [
                    'rgb(185, 185, 246)',
                    'rgb(185, 185, 246)', 
                    'rgb(185, 185, 246)', 
                    'rgb(88, 88, 169)',   
                ],
                
                borderWidth: 1,
                borderRadius: 10, 
                barThickness: 20, 
                maxBarThickness: 20, 
            },
        ],
    };

    const options = {
        maintainAspectRatio: false, 
        scales: {
            x: {
                offset: true, 
                grid: {
                    display: true,
                    borderDash: [5, 5], 
                },
            },
            y: {
                grid: {
                    display: false,
                },
                ticks: {
                    display: false, // Hides the y-axis values
                },
            },
        },
        plugins: {
            legend: {
                display: false, // Hides the legend
            },
        },
    };

    return (
        <main className='barchart-container'>
            <p>Overview</p>
            <Bar data={data} options={options} />
        </main>
    );
};

export default BarChart;
