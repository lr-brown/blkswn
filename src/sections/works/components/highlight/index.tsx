import React from "react"
import * as Icons from "../../../../icons"
import { getIcon } from "../../../../icons"
import Button from "../../../../components/button"
import { useRef, useState, useEffect } from "react"
import type { Project } from "../../../../types"
import "./style.css"

type HighLightedWorkProps = {
  index: number
  content: Project
  openGallery: () => void
  handleClick: () => void
}

export const HighLightedWork = ({
  index,
  content,
  openGallery,
  handleClick,
}: HighLightedWorkProps) => {
  const useOnScreen = (ref: React.RefObject<HTMLDivElement | null>) => {
    const [seen, setSeen] = useState(false)
    useEffect(() => {
      const node = ref.current
      if (!node || seen) return
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setSeen(true)
      })
      observer.observe(node)
      return () => observer.disconnect()
    }, [ref, seen])
    return seen
  }

  const Ref = useRef<HTMLDivElement>(null)
  const parity = index % 2 === 0 ? "even" : "odd"
  const inView = useOnScreen(Ref) ? "in-view" : ""

  return (
    <div className="highlight" ref={Ref}>
      <div className="highlight-content">
        <div className={`highlight-image ${parity} ${inView}`}>
          {(content.cover ?? []).map((src) => (
            <img key={src} src={src} alt={content.alt} />
          ))}
        </div>
        <div className={`highlight-info ${parity} ${inView}`}>
          <h2 className="highlight-title">{content.title}</h2>
          <div className={`highlight-description ${parity}`}>
            {content.description["What?"]}
            <div className="highlight-button-row">
              {content.icons.map((logo) => (
                <div className="highlight-icon" key={logo}>
                  {getIcon(logo, "24px")}
                </div>
              ))}
            </div>
          </div>
          <div className="highlight-button-row">
            <Button
              handleClick={handleClick}
              text={"All the details!"}
              color={"var(--accentColor)"}
              margin="8px"
            />

            <Button
              handleClick={openGallery}
              text={"Gallery"}
              color={"var(--accentColor)"}
              margin="8px"
            />
            {content.github && (
              <a
                className="highlight-icon-link"
                aria-label={content.title + "Github"}
                href={content.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.GitHub size="32px" />
              </a>
            )}
            {content.external && (
              <a
                className="highlight-icon-link"
                aria-label={content.title + "Link"}
                href={content.external}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.External size="32px" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
