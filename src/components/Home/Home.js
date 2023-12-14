import React from "react";
import "../../assets/css/Home.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import '../../assets/css/Navbar.css'

export default function Home() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
    <div>
      <section>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p className="big1">Welcome!</p>
        <p className="big3">Take a look at my portfolio</p><br/><br/><br/>
        <p className="big21">Quality first.. </p>
        <p className="big22">Results guaranteed...</p>
      </section>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}