import styled from "styled-components"
import { motion } from "framer-motion"

export const SSideBar = styled.div`
  display: flex;
  top: 0px;
  margin-left: 8px;
  position: sticky;
  border-radius: 20px;
  width: 225px;
  height: 100vh;
  font-size: var(--title2);
  flex-direction: column;
  overflow-y: auto;
`
export const SLogo = styled.img`
  width: 50%;
  display: flex;
  object-fit: contain;
`
export const SHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 12px 0px;
`
export const STitle = styled.text`
  hyphens: auto;
  margin-top: 6px;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
`

export const SSvg = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const STab = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  fill: var(--buttons);
  width: 85%;
  cursor: pointer;
  margin: 4px;
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
  font-size: 16px;
  margin: 0px 4px;
`
