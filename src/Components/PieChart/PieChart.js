import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './PieChart.css'
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  return (
    <div className='pieChart'>
        <Pie height={150}
        data={{
            labels: ['Basic Tree', 'Custom Short Pants', 'Super Hoodies'],
  datasets: [
    {
      label: 'Sales',
      data: [55, 31, 14],
      backgroundColor: [
        '#98d89e',
        '#f6dc7d',
        '#ee8484',
      ],
      borderColor: [
        '#98d89e',
        '#f6dc7d',
        '#ee8484',
      ],
      borderWidth: 1,
      
    },
  ],
}}
options = {{
            maintainAspectRatio:false,
            responsive: true,
            
            plugins: {
              legend: {
                display:true,
                position:"right",
                align:"center",
            
            }
,
            title: {
                display: true,
                text: 'Top Products',
                font:{
                    size:16,
                },
              align:'start',
              
              
              },
}}}
        />
    </div>
  )
}

export default PieChart