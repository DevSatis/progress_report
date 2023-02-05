import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./LineGraphSignups.css";

const LineGraphSignups = () => {
  const [clssName, setClssName] = useState();
  const [studentCount, setStudentCount] = useState();

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
        series={[
          {
            name: "Class A",
            data: [20, 14, 50, 10, 98],
          },
          { name: "Class B", data: [0, 21, 67, 38, 10] },
          {
            name: "Class C",
            data: [2, 30, 44, 90, 26],
          },
          {
            name: "Class D",
            data: [87, 65, 99, 110, 110],
          },
        ]}
        options={{
          legend: {
            position: "top",
            horizontalAlign: "right",
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

export default LineGraphSignups;
