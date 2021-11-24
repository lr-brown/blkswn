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
  padding: 16px;
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
  height: 10%;
`
export const SBody = styled(motion.div)`
  flex-direction: row;
  margin-top: 16px;
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: space-evenly;
`

export const SIcon = styled(motion.img)`
  border-radius: 12px;
  margin: 12px 12px;
  display: flex;
  height: 100%;
  object-fit: contain;
`

export const SSlideShow = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  grid-area: 1/2/1/3;
  max-height: 100%;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  img {
    object-fit: contain;
    max-height: 90%;
    max-width: 100%;
    display: block;
    cursor: pointer;
    border-radius: 6px;
  }
`
export const SFullScreen = styled.div`
  opacity: 0;
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  button {
    font-size: var(--title2);
    color: white;
    background-color: var(--buttonsAlt);
    padding: 8px;
    border-radius: 8px;
  }
  :hover {
    opacity: 1;
  }
`
export const SButton = styled(motion.div)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    height: fit-content;
  }
`

export const SHeader = styled(motion.div)`
  font-size: var(--title1);
  display: flex;
  font-weight: bolder;
`
export const SDescription = styled(motion.div)`
  justify-content: center;
  width: 50%;
  display: flex;
  padding: 16px;
  max-height: 100%;
  font-size: var(--body);
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
`
export const SQuestion = styled(motion.div)`
  h1 {
    font-size: var(--title2);
    font-weight: bold;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  cursor: pointer;
  margin: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  align-items: center;
  background-color: var(--buttonsAlt);
`
export const SAnswer = styled(motion.p)`
  font-size: var(--body);
  border-radius: 8px;
  display: flex;
  width: 100%;
  overflow-y: hidden;
  white-space: pre-wrap;
`

export const SOverlay = styled(motion.div)`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const SCancel = styled(motion.button)`
  margin: 8px 8px;
  align-self: flex-start;
`
