import React, { useState } from "react"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { SBody, SCards, SHeader, SHighlights } from "./style"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import assets from "../../lib/assets.json"
import ReflectionModal from "./components/reflection-cards"
import WorksCard from "./components/other-cards"
import { HighLightedWork } from "./components/highlight"

const WorksView = () => {
  const [modal, setModal] = useState(false)
  const [selProject, setProject] = useState("")
  const [content, setContent] = useState({})
  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setIndex] = useState(0)
  const [images, setImages] = useState([])
  const [caption, setCaption] = useState("")
  const [iconLayout, setIcon] = useState(false)

  const openSlide = (title) => {
    setImages(assets["others"][title]["screenshots"])
    setCaption(assets["others"][title]["alt"])

    setOpen(true)
    setIndex(0)
  }

  const openGallery = (title) => {
    setImages(
      assets["highlights"][title]["cover"].concat(
        assets["highlights"][title]["screenshots"]
      )
    )
    setCaption(assets["highlights"][title]["alt"])
    setOpen(true)
    setIndex(0)
  }

  const handleClick = (title, content, iconLayout) => {
    if (!modal) {
      setModal(true)
      setProject(title)
      setContent(content)
      setIcon(iconLayout)
    }
  }
  const handleExit = () => {
    setProject("")
    setModal(false)
  }

  return (
    <SBody>
      <AnimateSharedLayout type="crossfade">
        <SHeader id="works">Some Things I've Done </SHeader>
        <SHighlights>
          {Object.keys(assets.highlights).map((project, index) => {
            const layoutId = {
              pic: `${project}pic`,
              body: `${project}body`,
              title: `${project}title`,
            }
            return (
              <HighLightedWork
                openGallery={() => openGallery(project)}
                index={index}
                content={assets.highlights[project]}
                layoutId={layoutId}
                handleClick={() =>
                  handleClick(project, assets.highlights[project], false)
                }
              />
            )
          })}
        </SHighlights>

        <SHeader>Other Things I've Done</SHeader>
        <SCards>
          {Object.keys(assets.others).map((project) => {
            const layoutId = {
              pic: `${project}pic`,
              body: `${project}body`,
              title: `${project}title`,
            }
            return (
              <WorksCard
                onClick={() =>
                  handleClick(project, assets.others[project], true)
                }
                openSlide={() => openSlide(project)}
                content={assets.others[project]}
                key={project + "card"}
                layoutId={layoutId}
              />
            )
          })}

          <AnimatePresence>
            {modal && (
              <ReflectionModal
                layout={{
                  pic: `${selProject}pic`,
                  body: `${selProject}body`,
                  title: `${selProject}title`,
                }}
                key={selProject + "modal"}
                exit={handleExit}
                content={content}
                openSlide={openSlide}
                iconLayout={iconLayout}
              />
            )}
          </AnimatePresence>

          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageCaption={caption}
              onCloseRequest={() => setOpen(false)}
              onMovePrevRequest={() =>
                setIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </SCards>
      </AnimateSharedLayout>
    </SBody>
  )
}

export default WorksView
