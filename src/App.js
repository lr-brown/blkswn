import React from "react"
import Scaffold from "./lib/components/scaffold"
import GlobalStyle from "./lib/GlobalStyles"
import DarkLogo from "./lib/logos/dark_logo.png"
import IntroView from "./sections/intro"
import { Switch, Route, useLocation } from "react-router-dom"
import WorksView from "./sections/works"
import { AnimatePresence } from "framer-motion"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import DestopSideBar from "./lib/components/appbar/desktop"
import MobileAppBar from "./lib/components/appbar/mobile"

function App() {
  const location = useLocation()
  const tabletOrMobile = window.matchMedia("(max-width: 991px)")

  return (
    <div
      style={{
        display: "flex",
        flex: "1 1 auto",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GlobalStyle />
      <Scaffold
        sidebar={
          tabletOrMobile.matches ? (
            <MobileAppBar logo={DarkLogo} />
          ) : (
            <DestopSideBar logo={DarkLogo} />
          )
        }
        body={
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={IntroView} />
              <Route path="/works" component={WorksView} />
            </Switch>
          </AnimatePresence>
        }
      />
    </div>
  )
}

export default App
