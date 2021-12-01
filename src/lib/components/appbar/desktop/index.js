import React from "react"
import * as SVG from "../../../icons"
import {
  SSideBar,
  SHeading,
  SLogo,
  STitle,
  SSvg,
  STab,
  STabIcon,
  STabBody,
  SIcons,
  SIconsRow,
  STabText,
} from "./style"

const Tab = ({ icon, href, label }) => {
  return (
    <STab
      href={href}
      id={href}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.1 },
        fill: "var(--secondaryColor)",
      }}
    >
      <SVG.Squircle size={"100%"} />
      <STabBody>
        <STabIcon>{SVG.getTabIcon(icon, "3.5vw")}</STabIcon>
        <STabText> {label}</STabText>
      </STabBody>
    </STab>
  )
}

const DestopSideBar = ({ logo }) => {
  const iconHover = {
    scale: 1.1,
    borderColor: "var(--secondaryColor)",
  }
  return (
    <SSideBar>
      <SHeading>
        <SLogo src={logo} alt="Logo" />
        <STitle>Logan Brown</STitle>
        <STitle> Developer </STitle>
        <SIconsRow>
          <SIcons
            whileHover={iconHover}
            href={"https://github.com/Lr-Brown"}
            target="_blank"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: { type: "spring", stiffness: 100 },
              default: { duration: 0.2 },
            }}
          >
            <SVG.GitHub size="85%" />
          </SIcons>
          <SIcons
            href={"https://www.linkedin.com/in/lrbrown-1"}
            target="_blank"
            whileHover={iconHover}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: { type: "spring", stiffness: 100, delay: 0.25 },
              default: { duration: 0.2 },
            }}
          >
            <SVG.Linkedin size="85%" />
          </SIcons>
          <SIcons
            href={"mailto:lrbrown@wesleyan.edu?subject=[From%20Portfolio]"}
            target="_blank"
            whileHover={iconHover}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              y: { type: "spring", stiffness: 100, delay: 0.5 },
              default: { duration: 0.2 },
            }}
          >
            <SVG.Email size="85%" />
          </SIcons>
        </SIconsRow>
      </SHeading>
      <SSvg>
        <Tab icon="home" href="#home" label="About Me" />
        <Tab icon="portfolio" href="#works" label="My Work" />
        <Tab
          href="https://docs.google.com/document/d/1xKqSKlgiYtP053rVNgCdgxbEzGZYJPxt5aoCfMOM0Lc/export?format=pdf"
          icon="resume"
          label="Resume"
        />
      </SSvg>
    </SSideBar>
  )
}

export default DestopSideBar
