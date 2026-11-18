import React, { useState } from "react";
import "./style.css";
import Gallery from "./components/gallery";

const TimeLine = ({ items }: { items: any[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="timeline">
      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          {index > 0 && <div className={"timeline-line"}></div>}
          <div
            onClick={() => handleClick(index)}
            className={`timeline-dot ${activeIndex === index ? "active" : ""}`}
          ></div>
        </div>
      ))}
    </div>
  );
};

const WorksView = () => {
  const timelineItems = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 3, content: "Item 3" },
    { id: 3, content: "Item 3" },
  ];

  return (
    <section className="works" id="works">
      <TimeLine items={timelineItems} />
      <Gallery orientation="portrait"/>
    </section>
  );
};

export default WorksView;
