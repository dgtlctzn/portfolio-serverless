import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about-me" className="row animate__animated animate__fadeInLeft">
      <div className="col m3">
        <img id="bike" src="./img/me-on-a-bike.jpg" alt="me on a bike" />
      </div>
      <div className="col s12 m7 paragraph">
        <p className="about">
          Full stack developer and recent Georgia Tech bootcamp grad based in
          Atlanta, GA. Passionate about building web applications that are
          dynamic, responsive, and user-friendly. Experience with front-end and
          back-end, and love building Python scripts on my Raspberry Pi.
        </p>
        <p className="about">
          As a self-taught former recording engineer, I developed the ability to
          quickly pick up new technologies and work with many clients. I thrive
          in environments that require constant learning, making web development
          the ideal profession for me.
        </p>
      </div>
    </div>
  );
};

export default About;
