import BarChart from "../BarChart/BarChart";
import DatePicker from "../DatePicker/DatePicker";
import LineGraph from "../LineGraphLogins/LineGraphLogins";
import PieChart from "../PieChart.jsx/PieChart";
import UsageAreaGraph from "../UsageAreaGraph/UsageAreaGraph";
import "./AppBody.css";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import { useState } from "react";
import DonutChart from "../DonutChart/DonutChart";
import FusionChart from "../FusionCHart/FusionChart";

const AppBody = () => {
  const [arrayData, setArrayData] = useState(null);

  const handleArrayData = (monthArrData) => {
    setArrayData(monthArrData);
  };

  console.log("This data is form Parent " + arrayData);

  return (
    <div className="appbody">
      <div className="top">
        <div className="left">
          <div className="enrollment">
            <h1> User enrollment and activity of Bio 340: Genetics </h1>
            <p>
              View the enrollment and engagement of learners in this course.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="inputbox">
            <DatePicker dataReady={handleArrayData} />
          </div>
          <div className="dbtn">
            <span>Download</span>
            <VerticalAlignBottomIcon />
          </div>
        </div>
      </div>
      <div className="middle">
        {/* <div className="pie"><PieChart /></div> */}
        {/* <div className="bar"><BarChart /></div> */}
        <div className="donut">
          <DonutChart />
        </div>
        <div className="line">
          <LineGraph />{" "}
        </div>
      </div>
      <div className="bottom">
        <UsageAreaGraph />
      </div>
      
    </div>
  );
};

export default AppBody;
