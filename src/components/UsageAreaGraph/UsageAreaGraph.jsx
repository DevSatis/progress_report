import React from "react";
import "./UsageAreaGraph.css";
import Chart from "react-apexcharts";


const UsageAreaGraph = () => {
  return (
    <div className="usagegraph">
      <div className="title">
        <h3>Usage and Time spent</h3>
      </div>
      <div className="buttons">
        <button className="usage btn">Usage</button>
        <button className="Signups btn">Average time spent</button>
      </div>
      <Chart
        type="area"
        width={"100%"}
        height={"400"}
        series={[
          {
            name: "Class A",
            data: [12, 4, 67, 8, 59],
          },
          {
            name: "Class B",
            data: [1, 14, 27, 13, 89],
          },
          {
            name: "Class C",
            data: [52, 94, 37, 88, 19],
          },
          {
            name: "Class D",
            data: [102, 40, 97, 58, 9],
          },
        ]}
        options={{
          stroke: {
            curve: "straight",
            width: 1.5,
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
          },
          xaxis: {
            title: {
              text: "",
            },
            lines:{
                show:true,
            },
            categories: [
              "July 2022",
              "Aug 2022",
              "Sep 2022",
              "Oct 2022",
              "Nov 2022",
            ],
          },
          yaxis:{
            title: {
                text: "Usage(Number of clicks)",
                style:{
                    fontSize:"10px",
                    fontWeight:"bold"
                }
              },
             
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

export default UsageAreaGraph;
