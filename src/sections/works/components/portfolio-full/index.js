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
  SBottom,
  SDescriptionBG,
  SQuestion,
  SAnswer,
} from "./style"
import * as SVG from "../../../../lib/svg"
import { AnimatePresence } from "framer-motion"
import { Cross } from "@styled-icons/icomoon"
import ReactSwipe from "react-swipe"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useEffect } from "react"

const imageUrl = "https://drive.google.com/uc?export=view&id="

const CardModal = ({ layout, exit, content }) => {
  let reactSwipeEl

  const handleKeyDown = (event) => {
    if (event.keyCode === 39) {
      reactSwipeEl.next()
    }
    if (event.keyCode === 37) {
      reactSwipeEl.prev()
    }
    if (event.keyCode === 27) {
      exit()
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false)

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false)
    }
  })

  return (
    <AnimatePresence exitBeforeEnter>
      <SOverlay>
        <SCard layoutId={layout.body}>
          <STop>
            <SIcon src={imageUrl + content.logo} layoutId={layout.pic} />
            <SHeader layoutId={layout.title}>{content.title}</SHeader>
            <SCancel whileHover={{ scale: 1.1 }} onClick={exit}>
              <Cross size={36} />
            </SCancel>
          </STop>
          <SBody orientation={content.orientation}>
            <SSlideShow orientation={content.orientation}>
              <button onClick={() => reactSwipeEl.prev()}>
                <SVG.Arrow size={24} previous />
              </button>

              <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: true }}
                ref={(el) => (reactSwipeEl = el)}
              >
                {content["screenshots"].map((screenshot, index) => (
                  <SScreenShot
                    src={imageUrl + screenshot}
                    key={index}
                    alt="HI"
                  />
                ))}
              </ReactSwipe>
              <button onClick={() => reactSwipeEl.next()}>
                <SVG.Arrow size={24} />
              </button>
            </SSlideShow>

            <SDescriptionBG>
              <SDescription>
                <SQuestion>What?</SQuestion>
                <SAnswer>{content.description.what}</SAnswer>
                <SQuestion>Who, Where and When?</SQuestion>
                <SAnswer>{content.description.when}</SAnswer>
                <SQuestion>How?</SQuestion>
                <SAnswer>{content.description.how}</SAnswer>
                <SQuestion>Why?</SQuestion>
                <SAnswer>{content.description.why}</SAnswer>
              </SDescription>
            </SDescriptionBG>
          </SBody>
          <SBottom></SBottom>
        </SCard>
      </SOverlay>
    </AnimatePresence>
  )
}

export default CardModal
