import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";



const PieChart = () => {

    const [clssName, setclssName] = useState("");
    const [numberOfStudents, setNumberOfStudents] = useState(0);//For number of learner in a class

    //For calling the API and storing the data in useState hook from the backend server
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
        console.log(studentCount);
      }
      getStudentsData()

    },[]);

  return (
    <div className="piechart">
      <div className="title">
        <h4>Total number of students</h4>
      </div>
       <Chart 
          type="pie"
          width={250}
          height={300}
          series = {numberOfStudents}
          options={
            {
              noData:{
                text:"Empty Data"
              },
              labels:clssName,
              legend:{
                position:"top",
              }
            }
          }

        />
    </div>
  );
};

export default PieChart;
