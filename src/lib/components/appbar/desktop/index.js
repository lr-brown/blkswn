import React from "react"
import { useHistory, useLocation } from "react-router-dom"
import * as SVG from "../../../icons"
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

const Tab = ({ onCLick, icon, label }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: "1",
      }}
    >
      <STab
        id={label}
        onClick={onCLick}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.05 },
        }}
        whileFocus={{
          scale: 1.05,
          transition: { duration: 0.05 },
        }}
      >
        <SVG.Squircle size={"100%"} />
        <STabBody>
          <STabIcon>{SVG.getTabIcon(icon, "3.5vw")}</STabIcon>
        </STabBody>
      </STab>
      <STabText>{label}</STabText>
    </div>
  )
}

const DestopSideBar = ({ logo }) => {
  const history = useHistory()
  const location = useLocation()
  return (
    <SSideBar>
      <SHeading>
        <SLogo src={logo} alt="Logo" onClick={() => history.push("/")} />
        <STitle>
          {" "}
          Logan Brown
          <br /> Developer{" "}
        </STitle>
      </SHeading>
      <SSvg>
        <Tab
          onCLick={() => history.push("/", { prevPath: location.pathname })}
          icon="home"
          label="Home"
          index={1}
        />
        <Tab
          onCLick={() =>
            history.push("/works", { prevPath: location.pathname })
          }
          icon="portfolio"
          label="My Work"
          index={2}
        />
        <Tab
          onCLick={() =>
            window.open(
              "https://docs.google.com/document/d/1xKqSKlgiYtP053rVNgCdgxbEzGZYJPxt5aoCfMOM0Lc/export?format=pdf",
              "_blank"
            )
          }
          icon="resume"
          label="My Resume"
          index={3}
        />
      </SSvg>
    </SSideBar>
  )
}

export default DestopSideBar
