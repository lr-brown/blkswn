import styled from "styled-components"
import { motion } from "framer-motion"

export const SCard = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 90vh;
  width: 90vw;
  border-radius: 16px;
  background-color: var(--buttons);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  align-items: center;
`
export const STop = styled(motion.div)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  align-self: flex-start;
  display: flex;
`
export const SBody = styled(motion.div)`
  flex-direction: row;
  margin-top: 16px;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const SIcon = styled(motion.img)`
  border-radius: 12px;
  margin: 12px 12px;
  display: flex;
  height: 4.5vw;
  object-fit: contain;
`

export const SScreenShot = styled.img`
  display: flex;
  object-fit: contain;
  height: auto;
  width: auto;
  border-radius: 6px;
`

export const SSlideShow = styled.div`
  display: flex;
  width: ${(props) => (props.orientation === "landscape" ? "400px" : "275px")};
  margin-left: 12px;
`

export const SHeader = styled(motion.div)`
  font-size: 48px;
  display: flex;
`
export const SDescription = styled(motion.div)`
  font-size: 18px;
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: space-evenly;
`

export const SOverlay = styled(motion.div)`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const SCancel = styled(motion.div)`
  margin: 8px 8px;
  cursor: pointer;
  align-self: flex-start;
`
