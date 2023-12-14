import React from "react";
import "../../assets/css/Skills.css";
import Navbar from "../Navbar/Navbar-s";
import '../../assets/css/Navbar.css'

export default function Skills() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
    <div className="ab">
      <div class="ui">
      <div class="stats">
        <p>Skills</p>
      </div>
      <div class="mid">
        <h1>~Technical~</h1>
        <h2>Expertise in building web applications with javascript/ reactjs and other cool libraries and frameworks</h2>
      </div>
      <div class="skills">
        <div class="skill agility">
          <h3>Language</h3>
          <div class="skill-sphere">
            <span>81/99</span>
          </div>
          <p>c, c++, java, dbms, Html, css, javascript, rdbms</p>
        </div>
        <div class="skill strenght">
          <h3>Tools</h3>
          <div class="skill-sphere">
            <span>77/99</span>
          </div>
          <p>springboot, vs code, rest api, react, eclipse, rational rose, microsoft office, microsoft word</p>
        </div>
        <div class="skill defense">
          <h3>Soft Skills</h3>
          <div class="skill-sphere">
            <span>80/99</span>
          </div>
          <p>teamwork, leadership, flexibility, multi-tasking, time management, problem solving skills</p>
        </div>
        <div class="skill magic">
          <h3>Interests</h3>
          <div class="skill-sphere">
            <span>84/99</span>
          </div>
          <p>web development, programming,testing, cloud</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}