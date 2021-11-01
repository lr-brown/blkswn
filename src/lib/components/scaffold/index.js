import styled from "styled-components"
import React from "react"

const SScaffold = styled.main`
  display: flex;
  overflow-y: hidden;
  flex-direction: row;
  width: 100%;
  align-items: center;

  @media (max-width: 991) {
    flex-direction: column;
  }

  @media (min-width: 1700px) {
    width: 1700px;
    align-items: center;
    justify-content: center;
    justify-self: center;
  }
`
const SBody = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  @media (max-width: 991) {
    height: 90vh;
  }
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
