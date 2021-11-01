import React, { useState, useEffect } from "react"
import Card from "./components/portfolio-cards"
import CardModal from "./components/portfolio-full"
import { AnimateSharedLayout } from "framer-motion"
import { SBody, SHeader } from "./style"
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
  const [Assets, setAssets] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let url = "https://api.npoint.io/63009998d7fd4b52770f"
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setAssets(result)
        setTimeout(() => setLoading(false), 2000)
      })
      .catch((error) => console.log("error", error))
  }, [])

  const handleClick = (title) => {
    if (!modal && isDesktop) {
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
          alignItems: "center",
          width: "95%",
          alignSelf: "center",
          flexWrap: "wrap",
          flex: "1 1 auto",
        }}
      >
        {loading || Object.keys(Assets).length === 0 ? (
          <DotLoader size={150} color="var(--buttons)" />
        ) : (
          Object.keys(Assets).map((project) => {
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
      </div>
    </SBody>
  )
}

export default WorksView
