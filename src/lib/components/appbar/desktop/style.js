import styled from "styled-components"
import { motion } from "framer-motion"

export const SSideBar = styled.div`
  display: flex;
  /* background-color: var(--sidetab); */
  top: 6px;
  margin-left: 8px;
  position: sticky;
  border-radius: 20px;
  width: Calc(6vw + 75px);
  min-height: Calc(100vh - 12px);
  font-size: var(--title2);
  flex-direction: column;
  height: Calc(100vh - 16px);
`

export const SHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`
export const STitle = styled.text`
  hyphens: auto;
  margin-top: 6px;
  font-size: Calc(0.5vw + 10px);
  text-align: center;
`

export const SSvg = styled.div`
  display: flex;
  flex: 3;
  width: 95%;
  align-self: center;
  align-items: center;
  flex-direction: column;
`

export const STab = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  fill: var(--buttons);
  width: 85%;
  margin-bottom: 16px;
  cursor: pointer;
  :hover {
    fill: var(--buttonsAlt);
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
export const STabText = styled.text`
  text-align: center;
  justify-content: center;
  display: flex;
  font-size: 1vw;
  margin: 0px 4px;
`

export const SLogo = styled.img`
  max-width: 50%;
  display: flex;
  object-fit: contain;
`
