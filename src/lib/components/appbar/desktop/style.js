import styled from "styled-components"
import { motion } from "framer-motion"

export const SSideBar = styled.div`
  display: none;
  top: 0px;
  margin-left: 8px;
  padding: 4px;
  position: sticky;
  border-radius: 20px;
  width: 14%;
  height: 100vh;
  font-size: var(--title2);
  flex-direction: column;
  overflow-y: auto;
  justify-content: center;
  @media screen and (min-width: 1023px) {
    display: flex;
  }
`
export const SLogo = styled.img`
  max-width: 50%;
  display: flex;
  object-fit: contain;
  padding: 4px;
`
export const SHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const STitle = styled.text`
  hyphens: auto;
  font-size: var(--title2);
  text-align: center;
  font-weight: 600;
`

export const SSvg = styled.div`
  display: flex;
  align-items: center;
  max-height: 100%;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const STab = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  fill: var(--buttons);
  width: 80%;
  cursor: pointer;
  margin: 0px;
  padding: 0px;
  color: var(--primaryTextColor);
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
  font-size: var(--headline);
  font-weight: 500;
`
