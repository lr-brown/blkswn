import React, { useEffect, useState } from "react"
import DestopSideBar from "./desktop"
import MobileAppBar from "./mobile"
import { isMobile } from "react-device-detect"

const AppBar = ({ logo, menu, setMenu }) => {
  const [mobile, setMobile] = useState(isMobile)
  return mobile ? (
    <MobileAppBar logo={logo} menu={menu} setMenu={setMenu} />
  ) : (
    <DestopSideBar logo={logo} />
  )
}

export default AppBar
