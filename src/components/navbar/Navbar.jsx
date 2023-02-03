import React from "react";
import "./Navbar.css";
import { MoreVert } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Cog</span>
          <span className="logo second">Books </span>
          <span>|</span>
          <span> Dashboard </span>
        </div>
        <div className="topRight">
          <div className="iconContainer">
            <span className="userName">Instr Name</span>
          </div>
          <div className="iconContainer">
            <MoreVert />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
