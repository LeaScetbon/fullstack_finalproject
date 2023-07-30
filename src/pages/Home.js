import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Preview from "../assets/Preview.jpeg";
import "./Home.css";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
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
              The Pink Bakery is a distinct bakery shop <br />
              known for producing the best products <br />
              and recipies for making sweets
            </p>

            <a href="#" class="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
      {/* about section */}
      <section class="icons-container">
        <div class="icons">
          <img src={icon1} alt="" />
          <div class="info">
            <h3>free delivery</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div class="icons">
          <img src={icon2} alt="" />
          <div class="info">
            <h3>10 days returns</h3>
            <span>moneyback guarantee</span>
          </div>
        </div>
        <div class="icons">
          <img src={icon3} alt="" />
          <div class="info">
            <h3>offer & gifts</h3>
            <span>on all orders</span>
          </div>
        </div>
        <div class="icons">
          <img src={icon4} alt="" />
          <div class="info">
            <h3>secure payments</h3>
            <span>protected by paypal</span>
          </div>
        </div>
      </section>
      {/* footer section */}
      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>extra links</h3>
            <a href="#">my account</a>
            <a href="#">my order</a>
            <a href="#">my favorite</a>
          </div>
          <div class="box">
            <h3>locations</h3>
            <label>Israel</label>
            <label>France</label>
            <label>Italy</label>
            <label>Holand</label>
          </div>
          <div class="box">
            <h3>contact info</h3>
            <label>+972-50-123-1458</label>
            <label>pinkBakery@gmail.com</label>
            <label>Jerusalem, israel</label>
            <img src="src/assets/payment.png" alt="" />
          </div>
        </div>
      </section>
    </body>
  );
}

export default Home;
