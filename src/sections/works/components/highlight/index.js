import React from "react"
import {
  SBody,
  SContent,
  SDescription,
  SImage,
  SInfo,
  SButtonRow,
  STitle,
  SIconLink,
  SIcon,
} from "./style"
import * as Icons from "../../../../lib/icons/icons"
import { getLogo } from "../../../../lib/icons/logos"
import Button from "../../../../lib/components/button"
import { useRef, useState, useEffect } from "react"

export const HighLightedWork = ({
  index,
  content,
  openGallery,
  layoutId,
  handleClick,
}) => {
  const useOnScreen = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false)
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )
    useEffect(() => {
      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect()
      }
    })
    return isIntersecting
  }

  const Ref = useRef()

  return (
    <SBody ref={Ref}>
      <SContent>
        <SImage
          index={index}
          initial={{ x: index % 2 === 0 ? "50%" : "-50%", opacity: 0 }}
          animate={useOnScreen(Ref) ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
        >
          {content.cover.map((src) => (
            <img index={index} src={src} alt={content.title + " cover"} />
          ))}
        </SImage>
        <SInfo
          index={index}
          initial={{ x: index % 2 === 0 ? "-50%" : "50%", opacity: 0 }}
          animate={useOnScreen(Ref) ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "tween", ease: "easeIn", duration: 0.5 }}
        >
          <STitle layoutId={layoutId.title}>{content.title}</STitle>
          <SDescription index={index} layoutId={layoutId.body}>
            {content.description["What?"]}
            <SButtonRow>
              {content.icons.map((logo) => (
                <SIcon>{getLogo(logo, "24px")}</SIcon>
              ))}
            </SButtonRow>
          </SDescription>
          <SButtonRow index={index}>
            {window.matchMedia("(min-width: 1024px)").matches && (
              <Button
                handleClick={handleClick}
                text={"What I've learned"}
                color={"var(--primaryColor)"}
                margin="8px"
              />
            )}
            <Button
              handleClick={openGallery}
              text={"Gallery"}
              color={"var(--primaryColor)"}
              margin="8px"
            />
            {content.github && (
              <SIconLink
                href={content.github}
                target="_blank"
                whileHover={{ scale: 1.1 }}
              >
                <Icons.GitHub size="32px" />
              </SIconLink>
            )}
            {content.external && (
              <SIconLink
                href={content.external}
                target="_blank"
                whileHover={{ scale: 1.1 }}
              >
                <Icons.External size="32px" />
              </SIconLink>
            )}
          </SButtonRow>
        </SInfo>
      </SContent>
    </SBody>
  )
}
