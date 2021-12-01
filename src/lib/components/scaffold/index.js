import styled from "styled-components"
import React from "react"

const SScaffold = styled.main`
  display: flex;
  overflow-y: hidden;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1700px) {
    width: 1700px;
    align-items: center;
    justify-content: center;
    justify-self: center;
  }
`
const SBody = styled.div`
  display: grid;
  grid-template-rows: 100vh;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  padding-bottom: 100px;
  @media (max-width: 1023px) {
    grid-template-rows: 100fr;
  }
`

const Scaffold = ({ sidebar, body }) => {
  return (
    <SScaffold>
      {sidebar}
      <SBody>{body}</SBody>
    </SScaffold>
  )
}

export default Scaffold
