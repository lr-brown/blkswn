import styled from "styled-components"
import { motion } from "framer-motion"

export const STopBar = styled.div`
  display: none;
  background: var(--backgroundColor);
  top: 0px;
  position: sticky;
  width: 100vw;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    display: flex;
  }
`

export const SMore = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    margin-right: 8px;
  }
  path {
    fill: white;
  }
`
export const SSections = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const SButton = styled.a`
  border-radius: 30%;
  font-size: var(--headline);
  flex: 1;
  padding: 8px;
  font-weight: bold;
  color: white;
  :hover {
    background-color: var(--primaryColorTint);
  }
`

export const SLogo = styled.img`
  width: 35%;
  margin-left: 8px;
  display: flex;
  object-fit: contain;
`
export const SImage = styled.div`
  flex: 1;
  display: flex;
  padding: 8px;
  justify-content: flex-start;
  max-height: 100%;
`

export const SMenu = styled(motion.div)`
  display: ${(props) => props.display};
  position: fixed;
  background: var(--backgroundColor);
  flex-direction: column;
  align-items: center;
  top: 10vh;
  left: 0;
  width: 100%;
  height: 90vh;
  overflow-y: auto;
  padding: 16px;
  @media screen and (min-width: 1023px) {
    display: none;
  }
`
export const STab = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  fill: var(--primaryColor);
  flex: 1;
  cursor: pointer;
  margin: 4px;
  color: var(--primaryTextColor);
  :hover {
    fill: var(--secondaryColor);
  }
`

export const STabBody = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
`
export const STabIcon = styled.div`
  fill: var(--icons);
  margin-bottom: 6px;
  display: flex;
  justify-content: center;
`
