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
import * as SVG from "../../../../lib/icons"
import { getLogo } from "../../../../lib/icons"
import Button from "../../../../lib/components/button"

export const HighLightedWork = ({
  index,
  content,
  openGallery,
  layoutId,
  handleClick,
}) => {
  return (
    <SBody>
      <SContent>
        <SImage index={index}>
          {content.cover.map((src) => (
            <img index={index} src={src} alt={content.title + " cover"} />
          ))}
        </SImage>
        <SInfo index={index}>
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
            <Button
              handleClick={handleClick}
              text={"What I've learned"}
              color={"var(--primaryColor)"}
              margin="8px"
            />
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
                <SVG.GitHub size="32px" />
              </SIconLink>
            )}
            {content.external && (
              <SIconLink
                href={content.external}
                target="_blank"
                whileHover={{ scale: 1.1 }}
              >
                <SVG.External size="32px" />
              </SIconLink>
            )}
          </SButtonRow>
        </SInfo>
      </SContent>
    </SBody>
  )
}
