import React ,{useState} from "react";
import "./Dashboard.css";
import dashboard from "../../Images/analytics.png";
import transaction from "../../Images/tag.png";
import schedule from "../../Images/event.png";
import user from "../../Images/user.png";
import setting from "../../Images/setting.png";
import bell from "../../Images/bell.png";
import dp from "../../Images/FormalPic.jpg";
import Cards from "../../Components/Cards/Cards";
import Chart from "../../Components/Charts/Chart";
import PieChart from "../../Components/PieChart/PieChart";
import { TimeTable } from "../../TimeTable/TimeTable";
import menus from '../../Images/menus.png'
const Dashboard = () => {

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleMenuIconClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  
  return (
    <>
      <div className="main-container1">
        <div className="box-1">
          <div className="name"> <span id="board-1">Board.</span></div>
          <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`} >
          <div className="list">
            <ul>
              <li>
                <img src={dashboard} alt="icon" className="img" /> Dashboard
              </li>
              <li>
                <img src={transaction} alt="icon" className="img" /> Transaction
              </li>
              <li>
                <img src={schedule} alt="icon" className="img" /> Schedules
              </li>
              <li>
                <img src={user} alt="icon" className="img" /> Users
              </li>
              <li>
                <img src={setting} alt="icon" className="img" /> Setting
              </li>
            </ul>
          </div>
          <div className="bottom">
            <span>Help</span>
            <br />
            <span>Contact Us</span>
          </div>
          </div>
          <div className="menu" onClick={handleMenuIconClick}>
          <img src={menus} alt="toggle" />
          </div>
         
        </div>
        <div className="box-2">
          <div className="box2-1">
            <div className="left">
              <span id="dashboard-text">Dashboard</span>
            </div>
            <div className="right">
              <input type="search" placeholder="Search..." id="search" />
              <img src={bell} className="img" alt="notification" />
              <img src={dp} alt="profile" id="dp" />
            </div>
          </div>
          <div className="box2-2">
            <Cards />
          </div>
          <div className="box2-3">
            <Chart />
          </div>
          <div className="box2-4">
            <div className="box2-4-1">
              <PieChart />
            </div>
            <div className="box2-4-2">
              <div className="heading">
                <span id="title_schedule">Today's Schedule</span>
                <span style={{ fontSize: "12px" }}>See All{" >"}</span>
              </div>
              <div className="schedule">
                {TimeTable.map((schedule, id) => {
                  return (
                    <div
                      className="card" key={id}
                      style={{ borderLeft: schedule.color.borderColor }}
                    >
                      <span>{schedule.heading}</span>
                      <span>{schedule.time}</span>
                      <span>{schedule.meetingPoint}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
