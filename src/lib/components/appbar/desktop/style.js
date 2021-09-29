import styled from "styled-components"
import { motion } from "framer-motion"

export const SSideBar = styled.div`
  display: flex;
  background-image: var(--sidetab);
  top: 6px;
  margin-top: 6px;
  margin-left: 6px;
  position: sticky;
  border-radius: 20px;
  width: Calc(5vw + 75px);
  min-height: Calc(100vh - 12px);
  font-size: var(--title2);
  flex-direction: column;
  height: Calc(100vh - 12px);
`

export const SHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 24px;
`

export const STitle = styled.text`
  hyphens: auto;
  margin-top: 6px;
  font-size: Calc(0.5vw + 10px);
  text-align: center;
`

export const SSvg = styled.div`
  display: flex;
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
  cursor: pointer;
  margin: 8px 0px;
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
  height: 100%;
  width: 35%;
  flex: 1;
  display: flex;
  object-fit: contain;
`

// export const SThemeToggle = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: row;
// `

// export const SToggle = styled.div`
//   display: flex;
//   aspect-ratio: 2/1;
//   width: 100%;
//   margin: 4px;
//   align-self: center;
//   border-radius: 12px;
//   background-color: black;
//   cursor: pointer;
// `

// export const SKnob = styled(motion.div)`
//   height: 100%;
//   width: 50%;
//   border-radius: 12px;
//   background-color: white;
// `
