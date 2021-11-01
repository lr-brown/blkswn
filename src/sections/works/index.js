import React, { useState, useEffect } from "react"
import Card from "./components/portfolio-cards"
import CardModal from "./components/portfolio-full"
import { AnimateSharedLayout } from "framer-motion"
import { SBody, SCards, SHeader } from "./style"
import { isDesktop } from "react-device-detect"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import { DotLoader } from "react-spinners"

const WorksView = () => {
  const [modal, setModal] = useState("")
  const [tab, setTab] = useState(0)
  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setIndex] = useState(0)
  const [images, setImages] = useState([])
  const [assets, setAssets] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let url = "https://api.npoint.io/5d9cfefa9e5ec2216b9b"
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setAssets(result)
      })
      .then(setTimeout(() => setLoading(false), 1500))
      .catch((error) => console.log("error", error))
  }, [assets])

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
        {loading || Object.keys(assets).length === 0 ? (
          <DotLoader size={150} color="var(--buttons)" />
        ) : (
          Object.keys(assets).map((project, index) => {
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
          })
        )}
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
