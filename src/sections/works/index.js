import React, { useState } from "react"
import Card from "./components/portfolio-cards"
import CardModal from "./components/portfolio-full"
import { AnimateSharedLayout } from "framer-motion"
import Assets from "../../lib/images/assets.json"
import { SBody, SHeader } from "./style"
import { isBrowser } from "react-device-detect"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const WorksView = () => {
  const [modal, setModal] = useState("")
  const [tab, setTab] = useState(0)
  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setIndex] = useState(0)
  const [images, setImages] = useState([])

  const handleClick = (title) => {
    if (!modal && isBrowser) {
      setModal(title)
      setTab(-1)
    } else {
      setImages(Assets[title]["screenshots"])
      setOpen(true)
      setIndex(0)
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "95%",
          alignSelf: "center",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(Assets).map((project) => {
          return (
            <AnimateSharedLayout type="crossfade" key={project}>
              <Card
                onClick={() => handleClick(Assets[project].title)}
                content={Assets[project]}
                key={project + "1"}
                tabIndex={tab}
              />
              {modal === Assets[project].title ? (
                <CardModal
                  layout={{ pic: "pic", body: "body", title: "title" }}
                  exit={handleExit}
                  key={project + "2"}
                  content={Assets[project]}
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
      </div>
    </SBody>
  )
}

export default WorksView
