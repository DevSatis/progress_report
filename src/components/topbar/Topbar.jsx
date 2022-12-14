import React from "react";
import "./Topbar.css";
import { MoreVert } from "@mui/icons-material";
import User from '../image/woman.png';
import CourseDetail from "../courseDetail/CourseDetail";

const Topbar = () => {
  return (
    <>
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Cog</span>
          <span className="logo second">Books </span>
          <span>| </span>
          <span>Progress Report </span>
        </div>
        <div className="topRight">
        <div className="iconContainer">
            <span className="userName">Instr Name</span>
          </div>
          <div className="iconContainer">
            <MoreVert />
          </div>
          <img src={User} alt="" className="topAvatar"/>
        </div>
      </div>
      <div className="topItems">
        <CourseDetail />
      </div>
    </div>
    </>
  );
};

export default Topbar;
