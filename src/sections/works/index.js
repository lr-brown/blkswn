import React, { useState } from "react"
import Card from "./components/portfolio-cards"
import CardModal from "./components/portfolio-full"
import { AnimateSharedLayout } from "framer-motion"
import { SBody, SCards, SHeader } from "./style"
import { isDesktop } from "react-device-detect"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import assets from "../../lib/assets/assets.json"

const WorksView = () => {
  const [modal, setModal] = useState("")
  const [tab, setTab] = useState(0)
  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setIndex] = useState(0)
  const [images, setImages] = useState([])

  const openSlide = (index, title) => {
    setImages(assets[title]["screenshots"])
    setOpen(true)
    setIndex(index)
  }

  const handleClick = (title) => {
    if (modal === "" && isDesktop) {
      setModal(title)
      setTab(-1)
    } else {
      openSlide(0, title)
    }
  }

  const handleExit = () => {
    setModal("")
  }

  return (
    <SBody
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SHeader>My Work</SHeader>
      <SCards>
        {Object.keys(assets).map((project, index) => {
          return (
            <AnimateSharedLayout type="crossfade" key={project}>
              <Card
                onClick={() => handleClick(assets[project].title)}
                content={assets[project]}
                key={project + index}
                tabIndex={tab}
              />
              {modal === assets[project].title ? (
                <CardModal
                  layout={{ pic: "pic", body: "body", title: "title" }}
                  exit={handleExit}
                  key={project + "modal" + index}
                  content={assets[project]}
                  openSlide={openSlide}
                />
              ) : null}
            </AnimateSharedLayout>
          )
        })}
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() =>
              setIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() => setIndex((photoIndex + 1) % images.length)}
          />
        )}
      </SCards>
    </SBody>
  )
}

export default WorksView
