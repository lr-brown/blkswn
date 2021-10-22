import React, { useState } from "react"
import Card from "./components/portfolio-cards"
import CardModal from "./components/portfolio-full"
import { AnimateSharedLayout } from "framer-motion"
import Assets from "../../lib/images/assets.json"
import { SBody, SHeader } from "./style"

const WorksView = () => {
  const [modal, setModal] = useState("")
  const [tab, setTab] = useState(0)

  const handleClick = (title) => {
    if (!modal) {
      setModal(title)
      setTab(-1)
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
            <AnimateSharedLayout type="crossfade">
              <Card
                onClick={() => handleClick(Assets[project].title)}
                content={Assets[project]}
                key={project}
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
      </div>
    </SBody>
  )
}

export default WorksView
