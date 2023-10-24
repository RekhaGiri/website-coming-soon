import React from "react";
import './coming-soon.css';
function ComingSoon() {
  return (
    <div className="base">
    <div className="main">
      <img src="mains.png"/>
    </div>
    <h4>Website Is Under Maintainence</h4>
    <h2>We Are Launching Soon</h2>
    <button>Learn More</button>
    <div className="launch-time">
        <div>
            <p id="days">00</p>
            <span>Days</span>
        </div>
        <div>
            <p id="hours">00</p>
            <span>Hours</span>
        </div>
        <div>
            <p id="minutes">00</p>
            <span>Minutes</span>
        </div>
        <div>
            <p id="seconds">00</p>
            <span>Seconds</span>
        </div>
    </div>
    </div>
  );
}
export default ComingSoon;
