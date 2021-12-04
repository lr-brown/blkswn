import styled from "styled-components"
import { motion } from "framer-motion"

export const SSideBar = styled.div`
  display: none;
  top: 0px;
  margin-left: 8px;
  padding: 4px;
  position: sticky;
  border-radius: 20px;
  max-width: 12vw;
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
  max-width: 65%;
  max-height: 50%;
  display: flex;
  object-fit: contain;
  padding: 4px;
`
export const SHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 30%;
`
export const STitle = styled.h1`
  font-size: 1.4vw;
  text-align: center;
  font-weight: 600;
  margin-block-start: 0em;
  margin-block-end: 0em;
`
export const SIconsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 8px;
`
export const SIcons = styled(motion.a)`
  path {
    fill: var(--icons);
  }
  border-radius: 50%;
  border: solid 4px var(--primaryColor);
  margin: 4px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
`

export const SSvg = styled.div`
  display: flex;
  align-items: center;
  height: 65%;
  flex-direction: column;
  justify-content: space-evenly;
`

export const STab = styled(motion.a)`
  display: grid;
  height: 25%;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  fill: var(--primaryColor);
  cursor: pointer;
  margin: 0px;
  padding: 8px;
  color: var(--primaryTextColor);
  grid-template-columns: 1fr;
  grid-template-columns: 1fr;
  svg {
    grid-area: 1/1/1/1;
  }
`
export const STabBody = styled.div`
  grid-area: 1/1/1/1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`
export const STabIcon = styled.div`
  fill: var(--icons);
  margin-bottom: 6px;
  display: flex;
  justify-content: center;
`
export const STabText = styled.div`
  font-size: 1.2vw;
  text-align: center;
  font-weight: 700;
  width: 100%;
`

export const SMobileTopBar = styled.div`
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
export const SMobileSections = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`
export const SMobileButton = styled.a`
  border-radius: 8px;
  font-size: var(--headline);
  padding: 8px;
  margin: 0px 4px;
  background: var(--primaryGradient);
  font-weight: bold;
  text-decoration: none;
  color: white;
`

export const SMobileLogo = styled.img`
  width: 35%;
  margin-left: 8px;
  display: flex;
  object-fit: contain;
`
export const SMobileImage = styled.div`
  flex: 1;
  display: flex;
  padding: 8px;
  justify-content: flex-start;
  max-height: 100%;
`
