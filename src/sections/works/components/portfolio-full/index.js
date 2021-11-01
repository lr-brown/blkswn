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
  SImg,
} from "./style"
import * as SVG from "../../../../lib/svg"
import { AnimatePresence } from "framer-motion"
import Slider from "react-slick"
import { useEffect } from "react"
import { isDesktop } from "react-device-detect"

const imageUrl = ""

const CardModal = ({ layout, exit, content }) => {
  const Arrow = ({ onClick, className, prev }) => {
    return (
      <button
        style={{ fontSize: "0px" }}
        type="button"
        onClick={onClick}
        className={`button button--text button--icon ${className}`}
      >
        <SVG.Arrow previous={prev} />
      </button>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow prev />,
  }
  const handleKeyDown = (event) => {
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
              <SVG.Cross size="36px" />
            </SCancel>
          </STop>
          <SBody>
            <SSlideShow>
              <SImg orientation={content.orientation}>
                <Slider {...settings}>
                  {content["screenshots"].map((screenshot, index) => (
                    <SScreenShot
                      src={imageUrl + screenshot}
                      key={index}
                      alt="HI"
                    />
                  ))}
                </Slider>
              </SImg>
            </SSlideShow>
            {isDesktop ? (
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
            ) : null}
          </SBody>
          <SBottom></SBottom>
        </SCard>
      </SOverlay>
    </AnimatePresence>
  )
}

export default CardModal
