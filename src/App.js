import React from "react"
import Scaffold from "./lib/components/scaffold"
import GlobalStyle from "./lib/GlobalStyles"
import IntroView from "./sections/intro"
import WorksView from "./sections/works"
import MenuBar from "./lib/components/appbar"

function App() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <GlobalStyle />
      <Scaffold
        sidebar={<MenuBar logo={"images/dark_logo.png"} />}
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
