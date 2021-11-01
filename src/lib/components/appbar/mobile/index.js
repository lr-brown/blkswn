import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import * as SVG from "../../../svg"
import {
  SHeading,
  SLogo,
  STitle,
  STopBar,
  SMore,
  SImage,
  SMenu,
  STab,
  STabBody,
  STabIcon,
  STabText,
} from "./style"

const MobileAppBar = ({ logo }) => {
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  }

  const [menu, setMenu] = useState("none")
  const history = useHistory()

  const Tab = ({ page, icon, label }) => {
    return (
      <STab
        onClick={() => {
          history.push(page)
          setMenu("none")
        }}
      >
        <SVG.Squircle size={"100%"} />
        <STabBody>
          <STabIcon>{SVG.getTabIcon(icon)}</STabIcon>
          <STabText>{label}</STabText>
        </STabBody>
      </STab>
    )
  }
  return (
    <div>
      <STopBar>
        <SImage>
          <SLogo src={logo} onClick={() => history.push("/")} />
        </SImage>
        <SHeading>
          <STitle>Logan Brown</STitle>
          <STitle>Developer</STitle>
        </SHeading>
        <SMore>
          <div
            onClick={() => {
              menu === "flex" ? setMenu("none") : setMenu("flex")
            }}
          >
            {menu === "flex" ? (
              <SVG.Cross size="36px" />
            ) : (
              <SVG.Hamburger size="36px" />
            )}
          </div>
        </SMore>
      </STopBar>
      <AnimatePresence>
        <SMenu
          display={menu}
          animate={menu === "none" ? "closed" : "open"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <Tab page="/" icon="aboutMe" label="About Me" />
          <Tab page="/works" icon="portfolio" label="My Work" />
        </SMenu>
      </AnimatePresence>
    </div>
  )
}

export default MobileAppBar
