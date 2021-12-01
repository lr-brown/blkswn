import { motion } from "framer-motion"
import React from "react"
import Button from "../../../../lib/components/button"
import { getLogo } from "../../../../lib/icons"
import { SButtonRow, SCard, SHeader, SLogos } from "./style"

const Card = ({ content, onClick, layoutId, openSlide }) => {
  return (
    <SCard layoutId={layoutId.body}>
      <motion.img src={content.logo} layoutId={layoutId.pic} />
      <SHeader layoutId={layoutId.title}>{content.title}</SHeader>
      <SButtonRow>
        <Button
          handleClick={onClick}
          text={"Reflection"}
          color={"var(--secondaryColor)"}
        />
        <Button
          handleClick={openSlide}
          text={"Gallery"}
          color={"var(--secondaryColor)"}
        />
      </SButtonRow>
      <SLogos>{content.icons.map((logo) => getLogo(logo, "32px"))} </SLogos>
    </SCard>
  )
}

export default Card
