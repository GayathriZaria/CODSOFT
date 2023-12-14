import React from "react";
import "../../assets/css/Projects.css";
import Navbar from "../Navbar/Navbar-p";
import '../../assets/css/Navbar.css'

export default function Projects() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      {/* <div className="div"> */}
      <div class="division">
  <div class="progress-container">
    <div class="progress-bar">
      <div class="progress-fill" id="progressFill1"></div>
    </div>
    <div class="progress-text" id="progressText1">Full Stack</div>
  </div>
 </div>

 <div class="division">
  <div class="progress-container">
    <div class="progress-bar">
      <div class="progress-fill1" id="progressFill2"></div>
    </div>
    <div class="progress-text" id="progressText2">Frontend</div>
  </div>
  </div>

  <div class="division">
  <div class="progress-container">
    <div class="progress-bar">
      <div class="progress-fill2" id="progressFill3"></div>
    </div>
    <div class="progress-text" id="progressText3">Software design</div>
  </div>
  </div>

  <div class="division">
  <div class="progress-container">
    <div class="progress-bar">
      <div class="progress-fill3" id="progressFill4"></div>
    </div>
    <div class="progress-text" id="progressText4">User experience</div>
  </div>
</div>
{/* </div> */}

    </>
  );
}