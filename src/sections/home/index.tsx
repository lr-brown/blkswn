import React from "react";
import "./style.css";
import { getIcon, ICONS } from "../../icons";

const HomeChips = ({ icon, text }: { icon: ICONS; text: string }) => {
  return (
    <li className="home-chip">
      <span className="icon" aria-hidden="true">
        {getIcon(icon, "12px")}
      </span>
      <span className="home-chip-text">{text}</span>
    </li>
  );
};

const IconButton = ({
  icon,
  href,
  label,
}: {
  icon: ICONS;
  href: string;
  label: string;
}) => {
  return (
    <li>
      <a
        className="icon-button"
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon" aria-hidden="true">
          {getIcon(icon, "20px")}
        </span>
      </a>
    </li>
  );
};

const OutlinedImage = () => (
  <><svg className="svg-defs" aria-hidden="true" focusable="false">
    <filter
      id="portrait-outline"
      x="-20%"
      y="-20%"
      width="140%"
      height="140%"
      colorInterpolationFilters="sRGB"
    >
      {/* outer ring: 13px accent (6px inner + 7px accent) */}
      <feMorphology in="SourceAlpha" operator="dilate" radius="20" result="outerShape" />
      <feFlood style={{ floodColor: "var(--accentColor)" }} />
      <feComposite in2="outerShape" operator="in" result="outerRing" />
      {/* inner ring: 6px off-white */}
      <feMorphology in="SourceAlpha" operator="dilate" radius="8" result="innerShape" />
      <feFlood style={{ floodColor: "var(--offWhite)" }} />
      <feComposite in2="innerShape" operator="in" result="innerRing" />
      <feMerge>
        <feMergeNode in="outerRing" />
        <feMergeNode in="innerRing" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </svg><img
      className="home-picture"
      src="/images/logan.png"
      alt="Portrait of Logan Brown" /></>
)

const HomeView = () => {
  return (
    <section className="home" id="home" aria-labelledby="home-headline">
      <OutlinedImage/>
      <div className="home-text">
        <ul className="home-chips-row-header" aria-label="Location and links">
          <HomeChips icon={ICONS.LOCATION_PIN} text="Washington, DC" />
          <IconButton
            icon={ICONS.GITHUB}
            href="https://github.com/lr-brown"
            label="GitHub (opens in a new tab)"
          />
          <IconButton
            icon={ICONS.LINKEDIN}
            href="https://www.linkedin.com/in/lrbrown-1/"
            label="LinkedIn (opens in a new tab)"
          />
        </ul>
        <h2 className="home-headline" id="home-headline">
          Hi! I'm Logan, a Software Engineer
        </h2>
        <p className="home-description">
          Based in the DMV area. I have professional experience in Frontend Product Engineering
          but skills and interest in full stack and video game development.
        </p>
        <ul className="home-chips-row-footer" aria-label="Skills">
          <HomeChips icon={ICONS.HTML} text="HTML" />
          <HomeChips icon={ICONS.CSS} text="CSS" />
          <HomeChips icon={ICONS.JAVASCRIPT} text="JavaScript" />
          <HomeChips icon={ICONS.TYPESCRIPT} text="TypeScript" />
          <HomeChips icon={ICONS.REACT} text="React" />
          <HomeChips icon={ICONS.UNITY} text="Unity" />
        </ul>
      </div>
    </section>
  );
};

export default HomeView;
