import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./LineGraphLogins.css";

const LineGraphLogins = () => {

  const [clssName, setClssName ] = useState([]); // we have to pass the array of object to series

  // this hook is used for getting the data from the server and then passing it to useState as a array of objects
  useEffect(()=>{
    const getStudentsCounts = async()=>{

      const clasName = [];
      
      const reqData = await fetch("Date wise students data's API");
      const resData = await reqData.json();
      console.log(resData);

      for(let i = 0; i<resData.length; i++){
        clasName.push({name: resData[i].clasName, data:resData[i].monthwiseStudentsCount});
      }
      setClssName(clasName);
    }
    getStudentsCounts();
  },[]);


  
  return (
    <div className="linegraph">
      <div className="title">
        <h3>Classwise logins and signups distribution</h3>
      </div>
      <div className="buttons">
        <button className="logins btn">Logins</button>
        <button className="Signups btn">Signups</button>
      </div>
      <Chart
        type="line"
        width={690}
        height={400}
        series={[ // write here the array of object i.e (clssName) which we will get from useEffect
          {
            name: "Class A",
            data: [20, 14, 50, 120, 98],
          },
          { name: "Class B", data: [0, 21, 67, 38, 10] },
          {
            name: "Class C",
            data: [2, 30, 44, 90, 26],
          },
          {
            name: "Class D",
            data: [87, 65, 99, 10, 110],
          },
        ]}
        options={{
          legend: {
            position: "top",
            horizontalAlign: "right",
          },
          stroke:{
            width:1.5,
          },

          xaxis: {
            title: {
              text: "",
            },
            categories: [
              "July 2022",
              "Aug 2022",
              "Sep 2022",
              "Oct 2022",
              "Nov 2022",
            ],
          },
          chart: {
            toolbar: {
              show: false,
            },
          },
        }}
      />
    </div>
  );
};

export default LineGraphLogins;
