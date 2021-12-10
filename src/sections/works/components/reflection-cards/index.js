import React, { useEffect, useState } from "react"
import {
  SCard,
  SHeader,
  SIcon,
  STop,
  SOverlay,
  SCancel,
  SBody,
  SDescription,
  SQuestionButton,
  SQuestionRow,
} from "./style"
import * as Icons from "../../../../lib/icons/icons"

const ReflectionModal = ({ layout, exit, content, iconLayout }) => {
  const [selQuestion, setQuestion] = useState("What?")

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

  return (
    <>
      <SOverlay onClick={exit} />
      <SCard layoutId={layout.body} layout>
        <STop>
          {iconLayout ? (
            <SIcon
              src={content.logo}
              alt={content.title + "Logo"}
              layoutId={layout.pic}
            />
          ) : (
            <SIcon src={content.logo} alt={content.title + "Logo"} />
          )}
          <SHeader layoutId={layout.title}>{content.title}</SHeader>
          <SCancel
            whileHover={{ scale: 1.2 }}
            onClick={exit}
            aria-label="Cancle"
          >
            <Icons.Cross size="36px" />
          </SCancel>
        </STop>
        <SQuestionRow>
          {Object.keys(content.description).map((question) => (
            <SQuestionButton
              onClick={() => setQuestion(question)}
              whileHover={
                question === selQuestion
                  ? {}
                  : {
                      scale: 1.1,
                      backgroundColor: "var(--secondaryColorTint)",
                    }
              }
              animate={
                question === selQuestion
                  ? { backgroundColor: "var(--secondaryColor)" }
                  : {}
              }
            >
              {question}
            </SQuestionButton>
          ))}
        </SQuestionRow>
        <SBody>
          <SDescription>
            <p>{content.description[selQuestion]}</p>
          </SDescription>
        </SBody>
      </SCard>
    </>
  )
}

export default ReflectionModal
