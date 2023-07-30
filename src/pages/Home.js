import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Preview from "../assets/Preview.jpeg";
import "./Home.css";
function Home() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("username"))
  );
  let navigate = useNavigate();

  return (
    <body>
      {/* home section */}
      <section class="home" id="home">
        <div class="contant">
          <h3>Delicious sweets</h3>
          <span>fresh & tasty</span>
        </div>
      </section>
      {/* about section */}
      <section class="about" id="about">
        <h1 class="heading">
          about<span> us</span>
        </h1>
        <div class="row">
          {/* <div class="video-container">
            <video src="images/about_video.mp4" loop autoplay muted></video>
            <h3>best sellers</h3>
          </div> */}
          <div class="contant">
            {/* <h3>why choose us?</h3> */}
            <p>
              The Pink Bakery is a distinct bakery shop known for producing the
              best products and recipies for making sweets ,
            </p>

            <a href="#" class="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Home;
