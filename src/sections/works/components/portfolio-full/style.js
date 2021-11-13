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
  flex-wrap: wrap;
  max-width: 100%;
  max-height: 90%;
`

export const SIcon = styled(motion.img)`
  border-radius: 12px;
  margin: 12px 12px;
  display: flex;
  height: 100%;
  object-fit: contain;
`

export const SImg = styled.div`
  padding: 16px;
  max-height: 80%;
  max-width: 100%;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  img {
    max-height: 100%;
    max-width: 90%;
    width: auto;
    height: auto;
    cursor: pointer;
    border-radius: 6px;
  }
`

export const SSlideShow = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 50%;
  overflow-y: hidden;
`

export const SHeader = styled(motion.div)`
  font-size: var(--title1);
  display: flex;
  font-weight: bolder;
`
export const SDescriptionBG = styled(motion.div)`
  justify-content: center;
  flex: 1;
  display: flex;
  max-height: 100%;
`
export const SDescription = styled(motion.div)`
  font-size: var(--body);
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 16px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--accent);
    border-radius: 10px;
  }
`
export const SQuestion = styled(motion.h2)`
  font-size: var(--title2);
  display: flex;
  width: fit-content;
  align-items: center;
  margin-bottom: 8px;
  font-weight: bold;
`
export const SAnswer = styled(motion.p)`
  font-size: var(--body);
  border-radius: 8px;
  display: flex;
  width: fit-content;
  align-items: center;
  margin-bottom: 16px;
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

export const SBottom = styled(motion.div)`
  display: flex;
  height: 10%;
  width: 100%;
`
