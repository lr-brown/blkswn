import styled from "styled-components"
import React from "react"
import { isBrowser } from "react-device-detect"

const SScaffold = styled.main`
  display: flex;
  overflow-y: hidden;
  flex-direction: ${isBrowser ? "row" : "column"};
  @media (min-width: 1700px) {
    width: 1700px;
    align-items: center;
    justify-content: center;
    justify-self: center;
  }
`
const SBody = styled.div`
  display: flex;
  height: ${isBrowser ? "100vh" : "90vh"};
  width: 100%;
  overflow-y: auto;
`

const Scaffold = ({ sidebar, body, menu }) => {
  return (
    <SScaffold>
      {sidebar}
      <SBody menu={menu}>{body}</SBody>
    </SScaffold>
  )
}

export default Scaffold
