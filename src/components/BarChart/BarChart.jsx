import React from "react";
import Chart from "react-apexcharts";
import "./BarChart.css"

const BarChart = () => {
  return (
    <div className="barchart">
      <Chart
        type="bar"
        width={250}
        height={400}
        series={[
          {
            name: "Number of learners",
            data: [300, 150],
          },
        ]}
        options={{
            columnWidth: "20%",
          toolbar: {
              show: false
            },
          title: {
            text: `Total number of logins and sign ups`,
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
            horizontalAlign:"left",
          },
        }}
      />
    </div>
  );
};

export default BarChart;
