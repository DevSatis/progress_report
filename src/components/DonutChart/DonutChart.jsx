import React from 'react'
import Chart from "react-apexcharts";


const DonutChart = () => {
  return (
    <div className='donutchart'>
        <div className="title">
        <h4>Total number of students</h4>
      </div>
       <Chart 
          type="donut"
          width={250}
          height={300}
          series = {[30, 50 , 60, 90]}
          options={
            {
              noData:{
                text:"Empty Data"
              },
              labels:["Class A", "Class B", "Class C", "Class D"],
              legend:{
                position:"top",
              },
              plotOptions:{
                pie:{
                    dataLabels:{
                        
                    },
                    donut:{
                        labels:{
                            show: true,
                            name:{
                                show:true,
                                
                            }, 
                            total:{
                                label: "Total Number of students",
                            },
                            
                        }
                    }
                },
              },
            }
          }

        />
        
    </div>
  )
}

export default DonutChart