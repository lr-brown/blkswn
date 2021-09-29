import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Sun, Moon } from "styled-icons/boxicons-solid"
import { Divide } from "styled-icons/typicons"
import * as SVG from "../../../logos/svg"
import {
  SSideBar,
  SHeading,
  SLogo,
  STitle,
  SSvg,
  SToggle,
  SKnob,
  STab,
  SThemeToggle,
  STabIcon,
  STabText,
  STabBody,
  STopBar,
} from "./style"

const Tab = ({ page, icon, label }) => {
  const history = useHistory()
  return (
    <STab whileHover={{ scale: 1.1 }} onClick={() => history.push(page)}>
      <SVG.Tab />
      <STabBody>
        <STabIcon>{SVG.getTabIcon(icon)}</STabIcon>
        <STabText>{label}</STabText>
      </STabBody>
    </STab>
  )
}

const DestopSideBar = ({ logo }) => {
  return (
    <SSideBar>
      <SHeading>
        <SLogo src={logo} alt="Logo" />
        <STitle> {`Logan Brown \nDeveloper`} </STitle>
      </SHeading>
      <SSvg>
        <Tab page="/" icon="aboutMe" label="About Me" />
        <Tab page="/works" icon="portfolio" label="My Work" />
        <Tab icon="contact" label="Contact Me" />
        <Tab icon="resume" label="My Resume" />
      </SSvg>
    </SSideBar>
  )
}

export default DestopSideBar
