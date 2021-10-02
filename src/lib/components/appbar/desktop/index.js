import React from "react"
import { useHistory } from "react-router-dom"
import * as SVG from "../../../logos/svg"
import {
  SSideBar,
  SHeading,
  SLogo,
  STitle,
  SSvg,
  STab,
  STabIcon,
  STabText,
  STabBody,
} from "./style"
import Resume from "../../../Logan_Brown_Resume.pdf"

const Tab = ({ onCLick, icon, label }) => {
  return (
    <STab
      whileHover={{
        scale: 1.2,
      }}
      onClick={onCLick}
    >
      <SVG.Tab />
      <STabBody>
        <STabIcon>{SVG.getTabIcon(icon)}</STabIcon>
        <STabText>{label}</STabText>
      </STabBody>
    </STab>
  )
}

const DestopSideBar = ({ logo }) => {
  const history = useHistory()

  return (
    <SSideBar>
      <SHeading>
        <SLogo src={logo} alt="Logo" />
        <STitle> {`Logan Brown \nDeveloper`} </STitle>
      </SHeading>
      <SSvg>
        <Tab
          onCLick={() => history.push("/")}
          icon="aboutMe"
          label="About Me"
        />
        <Tab
          onCLick={() => history.push("/works")}
          icon="portfolio"
          label="My Work"
        />
        <Tab icon="contact" label="Contact Me" />
        <Tab
          onCLick={() => window.open(Resume)}
          icon="resume"
          label="My Resume"
        />
      </SSvg>
    </SSideBar>
  )
}

export default DestopSideBar
