import React, { useState } from "react"
import Card from "./components/portfolio-cards"
import * as Assets from "../../lib/images/assets.json"
import { SBody, SHeader, SText } from "./style"

const WorksView = () => {
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
        {Object.keys(Assets).map((project) => (
          <Card content={Assets[project]} key={project} />
        ))}
      </div>
    </SBody>
  )
}

export default WorksView
