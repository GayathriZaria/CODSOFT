import React from 'react';
import '../../assets/css/Footer.css'
import { Link } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        
        <div className="wave" id="wave4"></div>
      </div> 
      
        <div className="social-links">
          <i>
      <Link to={"https://www.linkedin.com/in/gayathri-n-a6373a229/"} target="_blank" rel="noopener noreferrer">
        <div className="icon-1"><Linkedin/></div>
      </Link></i>
          <i><Link to={"https://github.com/GayathriZaria"}>
        <div className="icon-2"><Github /></div>
      </Link></i>
        </div>
    </footer>
  );
};

export default Footer;
