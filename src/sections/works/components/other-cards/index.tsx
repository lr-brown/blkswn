import React from "react"
import Button from "../../../../components/button"
import { getIcon } from "../../../../icons"
import type { Project } from "../../../../types"
import "./style.css"

type WorksCardProps = {
  content: Project
  onClick: () => void
  openSlide: () => void
}

const WorksCard = ({ content, onClick, openSlide }: WorksCardProps) => {
  return (
    <div className="work-card">
      <img src={content.logo} alt={content.title + " Icon"} />
      <div className="work-card-header">{content.title}</div>
      <div className="work-card-button-row">
        {window.matchMedia("(min-width: 1024px)").matches && (
          <Button
            handleClick={onClick}
            text={"All the details"}
            color={"var(--secondaryColor)"}
          />
        )}
        {content.screenshots.length > 0 && (
          <Button
            handleClick={openSlide}
            text={"Gallery"}
            color={"var(--secondaryColor)"}
          />
        )}
      </div>
      <div className="work-card-logos">
        {content.icons.map((logo) => getIcon(logo, "32px"))}{" "}
      </div>
    </div>
  )
}

export default WorksCard
