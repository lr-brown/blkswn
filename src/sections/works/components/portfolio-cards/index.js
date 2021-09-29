import React, { useState } from "react"
import CardModal from "../portfolio-full/"
import { SButton, SCard, SHeader, SIcon } from "./style"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"

const imageUrl = "https://drive.google.com/uc?export=view&id="

const Card = ({ content }) => {
  const [modal, setModal] = useState(false)
  const layoutId = { pic: "pic", body: "body", title: "title" }

  return (
    <AnimateSharedLayout type="crossfade">
      <SCard layoutId={layoutId.body}>
        <SIcon src={imageUrl + content.logo} layoutId={layoutId.pic} />
        <SHeader layoutId={layoutId.title}>{content.title}</SHeader>
        <SButton onClick={() => setModal(true)} whileHover={{ scale: "1.1" }}>
          Learn More
        </SButton>
      </SCard>

      <AnimatePresence>
        {modal && (
          <CardModal
            layout={layoutId}
            exit={() => setModal(false)}
            content={content}
          />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default Card
