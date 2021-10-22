import React from "react"
import { SButton, SCard, SHeader, SIcon } from "./style"

const imageUrl = "https://drive.google.com/uc?export=view&id="

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
    </SCard>
  )
}

export default Card
