import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";



const PieChart = () => {

    const [clssName, setclssName] = useState("");
    const [numberOfStudents, setNumberOfStudents] = useState(0);

    useEffect(()=>{

      const classes = [];
      const studentCount = [];
      const getStudentsData = async()=>{
        const reqData = await fetch("https://jsonplaceholder.typicode.com/users");
        const resData = await reqData.json();
        console.log(resData);
        for(let i = 0; i<resData.length; i++){
          classes.push(resData[i].username);
          studentCount.push(parseInt(resData[i].id))
        }
        setclssName(classes);
        setNumberOfStudents(studentCount)
      }
      getStudentsData()

    },[])

  return (
    <div className="piechart">
      <div>
        <h2>Total number of students</h2>
        <h1>450</h1>
      </div>
      <hr></hr>
        <Chart 
          type="pie"
          width={400}
          height={500}
          series = {numberOfStudents}
          options={
            {
              title:{
                text:"Total Number of students"
              },
              noData:{
                text:"Empty Data"
              },
              labels:clssName,
            }
          }

        />
    </div>
  );
};

export default PieChart;
