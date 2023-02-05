import BarChart from "../BarChart/BarChart";
import DatePicker from "../DatePicker/DatePicker";
import LineGraph from "../LineGraphLogins/LineGraphLogins";
import PieChart from "../PieChart.jsx/PieChart";
import UsageAreaGraph from "../UsageAreaGraph/UsageAreaGraph";
import "./AppBody.css";
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';

const AppBody = ()=>{
    return(
        <div className="appbody">
            <div className="top">
                <div className="enrollment">
                    <h1> Enrollment and Activity </h1>
                    <VerticalAlignBottomIcon />
                </div>
                <p>View the enrollment and engagement of learners in this course.</p>
                <div className="inputbox">
                    <DatePicker />
                </div>
            </div>
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