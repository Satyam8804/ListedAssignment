import React from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Chart.css'
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);
const Chart = () => {

    

  return (
  <>
    <div className='chart'>
       <Line 
       height="400"
       data = {
        {
        labels:['Week 0','Week 1', 'Week 2', 'Week 3', 'Week 4']  ,
    datasets: [
      {
        label: 'User',
        data: [100,395,140,420,180],
        borderColor:"#58e85f",
        backgroundColor: '#58e85f',
        tension:0.5,
        pointRadius:1,
      },
      {
        label: 'Guest',
        data: [200,395,200,300,220],
        borderColor:"#e84d57",
        backgroundColor: '#e84d57',
        tension:0.5,
        pointRadius:1,
      },
    ],
          }
         }

         options = {{
            maintainAspectRatio: false ,
            responsive: true,
            plugins: {
              legend: {
                display:true,
                position:"top",
                align:"end",
              },
              title: {
                display: true,
                text: 'Activities',
                font:{
                    size:16,
                },
              align:'start'
              },
            },

            scales:{
                y:{
                    grid:{
                        display:true,
                    },
                
                }
                ,
                x:{
                    grid:{
                        display:false,
                    }
                }
            },
          }}

         />
    </div>
  </>
  )
}

export default Chart