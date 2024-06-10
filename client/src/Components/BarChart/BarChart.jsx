// src/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './barchart.module.css';

// Register the necessary components for ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '', // Remove the label
                data: [62, 70, 25, 88],
                backgroundColor: [
                    'rgb(185, 185, 246)', // January
                    'rgb(185, 185, 246)', // February
                    'rgb(185, 185, 246)', // March
                    'rgb(88, 88, 169)', // May(different color)
                    
                ],
                
                borderWidth: 1,
                borderRadius: 10, // Adds border radius to the bars
                barThickness: 20, // Sets the thickness of the bars
                maxBarThickness: 20, // Ensures the bars do not exceed this thickness
            },
        ],
    };

    const options = {
        maintainAspectRatio: false, // Allow chart to resize
        scales: {
            x: {
                offset: true, // Ensures the grid lines run through the bars
                grid: {
                    display: true,
                    borderDash: [5, 5], // Makes the x-axis grid lines dotted
                },
            },
            y: {
                grid: {
                    display: false, // Hides the y-axis grid lines
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
        <div className={styles.container}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
