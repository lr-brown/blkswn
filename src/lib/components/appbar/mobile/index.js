import React from "react"
import { SSections, SLogo, STopBar, SImage, SButton } from "./style"

const MobileAppBar = ({ logo }) => {
  return (
    <div>
      <STopBar>
        <SImage>
          <SLogo src={logo} />
        </SImage>
        <SSections>
          <SButton id="#home" href="#home">
            Home
          </SButton>
          <SButton id="#works" href="#works">
            Work
          </SButton>
        </SSections>
      </STopBar>
    </div>
  )
}

export default MobileAppBar
