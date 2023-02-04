import BarChart from "../BarChart/BarChart";
import LineGraph from "../LineGraphLogins/LineGraphLogins";
import PieChart from "../PieChart.jsx/PieChart";
import UsageAreaGraph from "../UsageAreaGraph/UsageAreaGraph";
import "./AppBody.css";

const AppBody = ()=>{
    return(
        <div className="appbody">
            <div className="top">Top</div>
            <div className="middle">
                <div className="pie"><PieChart /></div>
                <div className="bar"><BarChart /></div>
                <div className="line"><LineGraph /> </div>
            </div>
            <div className="bottom">
                <UsageAreaGraph />
            </div>
        </div>
    )
};

export default AppBody;