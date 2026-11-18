import React from "react";
import "./style.css";
import { getIcon, ICONS } from "../../icons";

const HomeChips = ({ icon, text }: { icon: ICONS; text: string } ) => {
  return (
    <div className="home-chip">
      {getIcon(icon, "12px")}
      <span className="home-chip-text">{text}</span>
    </div>
  );
};

const IconButton = ({ icon, href }: { icon: ICONS, href: string }) => {
  return (
    <a className="icon-button" href={href}>
      {getIcon(icon, "20px")}
    </a>
  );
};

const HomeView = () => {
  return (
    <section className="home" id="home">
      <img className="home-picture" src={"/images/logan.png"} alt={"Logan"} />
      <div className="home-text">
        <div className="home-chips-row-header">
          <HomeChips icon={ICONS.LOCATION_PIN} text="Washington, DC" />
          <IconButton icon={ICONS.GITHUB} href="https://github.com/lr-brown" />
          <IconButton icon={ICONS.LINKEDIN} href="https://www.linkedin.com/in/lrbrown-1/" />
          <IconButton icon={ICONS.CV} href="#home"/>
        </div>
      <h3 className="home-headline">Hi! I'm Logan, a Software <br/> Engineer</h3>
        <p className="home-description">
          Based in the DMV area. I have professional experience in Frontend Product Engineering
          but skills and interest in full stack and video game development.
        </p>
        <div className="home-chips-row-footer">
          <HomeChips icon={ICONS.HTML} text="HTML" />
          <HomeChips icon={ICONS.CSS} text="CSS" />
          <HomeChips icon={ICONS.JAVASCRIPT} text="JavaScript" />
          <HomeChips icon={ICONS.TYPESCRIPT} text="TypeScript" />
          <HomeChips icon={ICONS.REACT} text="React" />
          <HomeChips icon={ICONS.UNITY} text="Unity" />
        </div>
      </div>
    </section>
  );
};

export default HomeView;
