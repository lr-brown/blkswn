import React from "react"
import {
  SCard,
  SHeader,
  SIcon,
  STop,
  SOverlay,
  SScreenShot,
  SSlideShow,
  SCancel,
  SBody,
  SDescription,
} from "./style"
import { AnimatePresence } from "framer-motion"
import { Cross } from "@styled-icons/icomoon"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const imageUrl = "https://drive.google.com/uc?export=view&id="

const CardModal = ({ layout, exit, content }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <SOverlay>
        <SCard layoutId={layout.body}>
          <STop>
            <SIcon src={imageUrl + content.logo} layoutId={layout.pic} />
            <SHeader layoutId={layout.title}>{content.title}</SHeader>
            <SCancel whileHover={{ scale: 1.1 }}>
              <Cross size={36} onClick={exit} />
            </SCancel>
          </STop>
          <SBody>
            <SSlideShow orientation={content.orientation}>
              <Carousel infiniteLoop showStatus={false}>
                {content["screenshots"].map((screenshot, index) => (
                  <SScreenShot src={imageUrl + screenshot} key={index} />
                ))}
              </Carousel>
            </SSlideShow>
            <SDescription>{content.description}</SDescription>
          </SBody>
        </SCard>
      </SOverlay>
    </AnimatePresence>
  )
}

export default CardModal
