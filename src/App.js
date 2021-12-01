import React from "react"
import Scaffold from "./lib/components/scaffold"
import GlobalStyle from "./lib/GlobalStyles"
import DarkLogo from "./lib/images/dark_logo.png"
import IntroView from "./sections/intro"
import WorksView from "./sections/works"
import DestopSideBar from "./lib/components/appbar/desktop"
import MobileAppBar from "./lib/components/appbar/mobile"

function App() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    >
      <GlobalStyle />
      <Scaffold
        sidebar={
          <>
            <MobileAppBar logo={DarkLogo} />
            <DestopSideBar logo={DarkLogo} />
          </>
        }
        body={
          <>
            <IntroView />
            <WorksView />
          </>
        }
      />
    </div>
  )
}

export default App
