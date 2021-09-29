import styled from "styled-components"
import { motion } from "framer-motion"

export const STopBar = styled.div`
  display: flex;
  background-image: var(--sidetab);
  top: 0px;
  position: sticky;
  width: 100vw;
  height: 10vh;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const SMore = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    margin-right: 8px;
  }
`
export const SHeading = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const STitle = styled.text`
  hyphens: auto;
  margin-top: 6px;
  font-size: Calc(1vw + 12px);
  text-align: center;
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
  justify-content: flex-start;
`

export const SMenu = styled(motion.div)`
  display: ${(props) => props.display};
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 10vh;
  left: 0;
  height: 90vh;
  width: 100vw;
  background-image: var(--sidetab);
`
export const SMenuOption = styled.div`
  font-size: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
`
export const SDivider = styled.div`
  margin: 8px 4px;
  display: flex;
  height: 2px;
  background-color: black;
`
