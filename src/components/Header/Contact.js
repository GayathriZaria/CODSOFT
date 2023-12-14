import React from "react";
import "../../assets/css/Contact.css";
import Navbar from "../Navbar/Navbar-c";
import '../../assets/css/Navbar.css';
import { Link } from "react-router-dom";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit form data to API or handle message

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="div">
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit"><Link to='/'>Send Message</Link></button>
    </form>
    </div>
  </>
  );
}

    
