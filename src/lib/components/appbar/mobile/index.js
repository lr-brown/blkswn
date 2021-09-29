import React from "react"
import { useHistory } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { Hamburger, Cross } from "../../../logos/svg"
import * as SVG from "../../../logos/svg"
import {
  SHeading,
  SLogo,
  STitle,
  STopBar,
  SMore,
  SImage,
  SMenu,
  SMenuOption,
  SDivider,
} from "./style"

const MobileAppBar = ({ logo, menu, setMenu }) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  const Tab = ({ page, icon, label }) => {
    const history = useHistory()
    return (
      <SMenuOption
        onClick={() => {
          history.push(page)
          setMenu("none")
        }}
      >
        {SVG.getTabIcon(icon)}
        <div style={{ margin: "0px 12px" }}>{label}</div>
      </SMenuOption>
    )
  }
  return (
    <div>
      <STopBar>
        <SImage>
          <SLogo src={logo} />
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
              <Cross size="36px" />
            ) : (
              <Hamburger size="36px" />
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
          <div>
            <Tab page="/" icon="aboutMe" label="About Me" />
            <SDivider />
            <Tab page="/works" icon="portfolio" label="My Work" />
            <SDivider />
            <Tab icon="contact" label="Contact Me" />
          </div>
        </SMenu>
      </AnimatePresence>
    </div>
  )
}

export default MobileAppBar
