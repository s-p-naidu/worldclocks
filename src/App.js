import React from "react";
import "./App.css";
import Clock from "./Clockfun";

function App() {
  return (
    <>
      <center>
        <h1>World Clocks</h1>
      </center>
      <div className="clocks">
        <Clock timez="Asia/Kolkata"/>
        <Clock timez="Europe/London" />
        <Clock timez="Asia/Dubai" />
        <Clock timez="Asia/Tokyo" />
        <Clock timez="America/Los_Angeles" />
        <Clock timez="Europe/Paris" />
        <Clock timez="America/New_York" />
        <Clock timez="Pacific/Honolulu" />
        <Clock timez="Australia/Melbourne" />
      </div>
    </>
  );
}

export default App;

/*
<Clock timez="Asia/Kolkata" />
<Clock timez="Europe/London" />
 <Clock timez="Asia/Dubai" />
        
        <Clock timez="Asia/Tokyo" />
        <Clock timez="America/Los_Angeles" />
        <Clock timez="Europe/Paris" />
        <Clock timez="America/New_York" />
        <Clock timez="Pacific/Honolulu" />
        
*/
