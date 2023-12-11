import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import backgroundVideo from "../Video/video.mp4";
//import NavBar from "../layout/Navbar";
import Navbar from "../Navbar/NavBar";
import "./home.css";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <video loop autoPlay muted id="video2">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <br />
        <br />
        <h1 className="big1">You dream it... We plan it...</h1>
        <h1 className="big22">Fuel Your Soul With Travel...</h1>
        <br />
        <hr />
        <p className="font2">
          Learning is a strong reason why people love to travel
        </p>
        <p className="font2">
          Travelling to various places is another form of investing in yourself
        </p>
        <p className="font2">
          Real world is full of colors, sounds, sights and sites, that no
          computer screen can duplicate
        </p>
        <p className="font2">
          You get to see a place, its culture, treasures, and big sites, taste
          the cuisine, blend with the locals
        </p>
        <hr />
        <br />
        <br />
        <p className="text2">Flow of this website</p>
        <Link to="/layout">
          <button className="button2" align-item="center">
            Layout
          </button>
        </Link>

        <div class="square12">
          <div class="square22">
            <div class="square32">
              <div class="square42"></div>
            </div>
          </div>
        </div>
        <span className="texting1">
          Boat House
          <span className="texting2">
            Iceland
            <span className="texting3">
              Masai mara
              <span className="texting4">New York</span>
            </span>
          </span>
        </span>
        <div class="square1">
          <div class="square2">
            <div class="square4">
              <div class="square"></div>
            </div>
          </div>
        </div>
        <span className="texting12">
          Paris
          <span className="texting22">
            Santorini
            <span className="texting32">
              Taj Mahal
              <span className="texting42">Tower</span>
            </span>
          </span>
        </span>
        <br /><br /><br /><br /><br />
        <div className="big22">Why Online Tourism?</div>
        <br />
        <p className="fontt2">
        Online Tourism has caused several changes in the tourism industry.This system is 
        </p>
        <p className="fontt2">
        developed with an aim to solve the problem faced by tourists while booking for a tour plan in person. 
        </p>
        <p className="fontt2">
        This is to maintain digital records of every tourist.
        </p>
        <br />
        <div className="big22">What's new?</div>
        <br />
        <p className="fontt2">
          The main concept is to provide number of quality services to the tourists,
        </p>
        <p className="fontt2">
           who planned their trip through a travel and tourism firm.It includes nomination services ,
        </p>
        <p className="fontt2">
          ballot feature , full-service management , security and accuracy.
        </p>
        <br />

        <div className="big22">Contact Us</div>
        <br />
        <p className="font2">Mobile : 9876543210</p>
        <p className="font2">E-Mail : B3Tourism@gmail.com</p>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}