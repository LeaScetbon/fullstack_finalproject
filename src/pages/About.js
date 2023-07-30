import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./About.css";
function About() {
  return (
    <section class="about" id="about">
      <h1 class="heading">
        about<span> us</span>
      </h1>
      <div class="row">
        {/* <div class="video-container">
          <video
            src="../src/assets/about_video.mp4"
            loop
            autoplay
            muted
          ></video>
          <h3>best sellers</h3>
        </div> */}
        <div class="contant">
          <h3>why choose us?</h3>
          <p>
            Bread Bakery is a distinct bakery known for producing handmade
            pastries and sweets,
            <br /> made and baked in small batches throughout the day to ensure
            unparalleled freshness.
          </p>

          <a href="#" class="btn">
            learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
