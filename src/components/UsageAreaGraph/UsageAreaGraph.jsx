import React from "react";
import "./UsageAreaGraph.css";

const UsageAreaGraph = () => {
  return (
    <div className="usagegraph">
      <div className="title">
        <h3>Classwise logins and signups distribution</h3>
      </div>
      <div className="buttons">
        <button className="logins btn">Logins</button>
        <button className="Signups btn">Signups</button>
      </div>
      
    </div>
  );
};

export default UsageAreaGraph;
