import React from "react"
import {
  SCard,
  SHeader,
  SIcon,
  STop,
  SOverlay,
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
import { motion } from "framer-motion"
import * as SVG from "../../../../lib/icons"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { isDesktop } from "react-device-detect"
import { useState } from "react"

const imageUrl = ""

const CardModal = ({ layout, exit, content, openSlide }) => {
  const [index, setIndex] = useState(0)
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

  const changeSlide = (dir) => {
    let len = content["screenshots"].length
    dir === "next"
      ? setIndex((index + 1) % len)
      : index === 0
      ? setIndex(len - 1)
      : setIndex(index - 1)
  }

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
              <SImg>
                <img
                  onClick={() => openSlide(index, content.title)}
                  src={content["screenshots"][index]}
                  key={1}
                  alt="HI"
                />
                <div
                  style={{
                    padding: "16px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <motion.button
                    onClick={() => changeSlide()}
                    whileHover={{ scale: 1.1 }}
                  >
                    <SVG.Arrow previous size="48px" />
                  </motion.button>
                  <h1
                    style={{
                      marginBlockStart: "0em",
                      marginBlockEnd: "0em",
                    }}
                  >
                    Click Image to Enlarge
                  </h1>
                  <motion.button
                    onClick={() => changeSlide("next")}
                    whileHover={{ scale: 1.1 }}
                  >
                    <SVG.Arrow size="48px" />
                  </motion.button>
                </div>
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
