import React from "react"
import AboutView from "./sections/about"
import WorksView from "./sections/works"
import HomeView from "./sections/home"
import Header from "./components/header"

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
      >
        <HomeView />
        <AboutView />
        <WorksView />
      </main>
    </>
  )
}

export default App
