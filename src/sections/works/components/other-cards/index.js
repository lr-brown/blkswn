import { motion } from "framer-motion"
import React from "react"
import Button from "../../../../lib/components/button"
import { getLogo } from "../../../../lib/icons/logos"
import { SButtonRow, SCard, SHeader, SLogos } from "./style"

const WorksCard = ({ content, onClick, layoutId, openSlide }) => {
  return (
    <SCard layoutId={layoutId.body}>
      <motion.img src={content.logo} layoutId={layoutId.pic} />
      <SHeader layoutId={layoutId.title}>{content.title}</SHeader>
      <SButtonRow>
        {window.matchMedia("(min-width: 1024px)").matches && (
          <Button
            handleClick={onClick}
            text={"What I've Learned"}
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
      </SButtonRow>
      <SLogos>{content.icons.map((logo) => getLogo(logo, "32px"))} </SLogos>
    </SCard>
  )
}

export default WorksCard
