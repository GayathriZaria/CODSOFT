import React from "react";
import "../../assets/css/About.css";
import Navbar from "../Navbar/Navbar-a";
import '../../assets/css/Navbar.css';

// Import the profile image
import profileImage from '../../assets/images/profile.jpeg';

export default function About() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="div">
        <div className="about-container">
          {/* Use the imported image as the source for the img tag */}
          <img className="profile-picture" src={profileImage} alt="Profile" />
          <div className="about-text">
            <h2>About Me</h2>
            <p>I'm Gayathri.</p>
            <p>A student of academic year 2021-2025 from Sri Krishna College of Technology.</p>
            <p>Learnt programming and web development.</p>
            <ul className="skills-list">
              <li>Mobile: 9025018583</li>
              <li>Mail: 727821tucs050@skct.edu.in</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
