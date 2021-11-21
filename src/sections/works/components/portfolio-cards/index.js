import React from "react"
import { getLogo } from "../../../../lib/icons"
import { SButton, SCard, SHeader, SIcon, SLogos } from "./style"

const imageUrl = ""

const Card = ({ content, tab, onClick }) => {
  const layoutId = { pic: "pic", body: "body", title: "title" }
  return (
    <SCard layoutId={layoutId.body}>
      <SIcon src={imageUrl + content.logo} layoutId={layoutId.pic} />
      <SHeader layoutId={layoutId.title}>{content.title}</SHeader>
      <SButton
        onClick={onClick}
        tabIndex={tab}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      >
        Learn More
      </SButton>
      <SLogos>{content.icons.map((logo) => getLogo(logo, "32px"))} </SLogos>
    </SCard>
  )
}

export default Card
