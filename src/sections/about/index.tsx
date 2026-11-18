import React from "react";
import "./style.css";

const AboutView = () => {
  return (
    <section id="about" aria-labelledby="about-heading">
      <h2 className="sr-only" id="about-heading">About me</h2>
      <p className="intro-text">
        Hi! My name is Logan and I am a Software Engineer based in the DMV area.
        I have professional experience in Frontend Product Engineering but skill
        and interest in full stack and video game development. I have a passion
        for creating, developing and providing people with the tools required
        for digital expression. I look forward to working with you to create
        something amazing!
      </p>
    </section>
  );
};

export default AboutView;
