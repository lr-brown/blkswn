import React, { useEffect, useState } from "react"
import * as Icons from "../../../../icons"
import type { Project } from "../../../../types"
import "./style.css"

const CLOSE_MS = 200

type ReflectionModalProps = {
  exit: () => void
  content: Project
}

const ReflectionModal = ({ exit, content }: ReflectionModalProps) => {
  const [selQuestion, setQuestion] = useState("What?")
  const [closing, setClosing] = useState(false)

  const close = () => {
    if (closing) return
    setClosing(true)
    setTimeout(exit, CLOSE_MS)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      close()
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false)
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false)
    }
  })

  return (
    <>
      <div
        className={`reflection-overlay ${closing ? "closing" : ""}`}
        onClick={close}
      />
      <div className={`reflection-card ${closing ? "closing" : ""}`}>
        <div className="reflection-top">
          <img
            className="reflection-icon"
            src={content.logo}
            alt={content.title + "Logo"}
          />
          <div className="reflection-header">{content.title}</div>
          <button
            className="reflection-cancel"
            onClick={close}
            aria-label="Close"
          >
            <Icons.Cross size="36px" />
          </button>
        </div>
        <div className="reflection-question-row">
          {Object.keys(content.description).map((question) => (
            <button
              className={`reflection-question-button ${
                question === selQuestion ? "selected" : ""
              }`}
              key={question}
              onClick={() => setQuestion(question)}
            >
              {question}
            </button>
          ))}
        </div>
        <div className="reflection-body">
          <div className="reflection-description">
            <p>{content.description[selQuestion]}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReflectionModal
