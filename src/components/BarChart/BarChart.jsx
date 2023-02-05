import React from "react";
import Chart from "react-apexcharts";
import "./BarChart.css";

const BarChart = () => {
  return (
    <div className="barchart">
      <div className="title">
        <h4>Total number of logins and signups</h4>
      </div>
      <Chart
        type="bar"
        width={200}
        height={400}
        series={[
          {
            name: "Number of learners",
            data: [300, 150],
          },
        ]}
        
        options={{
          toolbar: {
            show: false,
          },
          noData: {
            text: "Empty Data",
          },
          xaxis: {
            categories: ["Sign ups", "Logins"],
          },
          plotOptions: {
            bar: {
              distributed: true,
            },
          },
          legend: {
            position: "top",
            horizontalAlign: "left",
          },
        }}
      />
    </div>
  );
};

export default BarChart;
