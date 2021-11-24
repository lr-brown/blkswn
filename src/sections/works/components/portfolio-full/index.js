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
  SQuestion,
  SAnswer,
  SButton,
  SFullScreen,
} from "./style"
import * as SVG from "../../../../lib/icons"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { useState } from "react"

const Accordion = ({ i, content, title, expanded, setExpanded }) => {
  const isOpen = i === expanded
  return (
    <SQuestion initial={false} onClick={() => setExpanded(isOpen ? false : i)}>
      <motion.h1>{title}</motion.h1>
      <AnimatePresence initial={false}>
        {isOpen && (
          <SAnswer
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: {
                height: 0,
                marginBlockStart: "0em",
                marginBlockEnd: "0em",
              },
            }}
            transition={{ duration: 0.5 }}
          >
            {content}
          </SAnswer>
        )}
      </AnimatePresence>
    </SQuestion>
  )
}

const SlideShow = ({ content, changeSlide, openSlide, index }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "50px 1fr 48px",
        maxWidth: "50%",
        height: "100%",
      }}
    >
      <SButton>
        <motion.button
          onClick={() => changeSlide(-1)}
          whileHover={{ scale: 1.1 }}
        >
          <SVG.Arrow size="48px" previous />
        </motion.button>
      </SButton>
      <AnimatePresence initial={false}>
        <SSlideShow key={index}>
          <motion.img
            onClick={() => openSlide(index, content.title)}
            src={content.screenshots[index]}
            alt="cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <SFullScreen>
            <button onClick={() => openSlide(index, content.title)}>
              Fullscreen
            </button>
          </SFullScreen>
        </SSlideShow>
      </AnimatePresence>

      <SButton>
        <motion.button
          onClick={() => changeSlide(1)}
          whileHover={{ scale: 1.1 }}
        >
          <SVG.Arrow size="48px" />
        </motion.button>
      </SButton>
    </div>
  )
}

const CardModal = ({ layout, exit, content, openSlide }) => {
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(-1)

  const changeSlide = (dir) => {
    let len = content["screenshots"].length
    dir < 0 && index === 0 ? setIndex(len - 1) : setIndex((index + dir) % len)
  }
  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      exit()
    } else if (event.keyCode === 37) {
      changeSlide(-1)
    } else if (event.keyCode === 39) {
      changeSlide(1)
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false)
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false)
    }
  })

  return (
    <SOverlay>
      <SCard layoutId={layout.body}>
        <STop>
          <SIcon src={content.logo} layoutId={layout.pic} />
          <SHeader layoutId={layout.title}>{content.title}</SHeader>
          <SCancel whileHover={{ scale: 1.2 }} onClick={exit}>
            <SVG.Cross size="36px" />
          </SCancel>
        </STop>
        <SBody>
          {content.screenshots.length > 0 ? (
            <SlideShow
              content={content}
              changeSlide={changeSlide}
              openSlide={openSlide}
              index={index}
            />
          ) : null}
          <SDescription>
            {Object.keys(content.description).map((question, index) => (
              <Accordion
                i={index}
                content={content.description[question]}
                title={question}
                expanded={expanded}
                setExpanded={setExpanded}
              />
            ))}
          </SDescription>
        </SBody>
      </SCard>
    </SOverlay>
  )
}

export default CardModal
