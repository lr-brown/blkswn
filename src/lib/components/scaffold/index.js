import styled from "styled-components"
import React from "react"
import { isMobile } from "react-device-detect"

const SScaffold = styled.main`
  width: 100%;
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
`
const SBody = styled.div`
  display: flex;
  height: ${isMobile ? "90vh" : "100vh"};
  width: 100%;
  overflow-y: ${(props) => (props.menu === "flex" ? "hidden" : "auto")};
  align-items: center;
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
