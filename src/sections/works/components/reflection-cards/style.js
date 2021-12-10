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
  width: 50vw;
  height: fit-content;
  border-radius: 16px;
  padding: 16px;
  background: linear-gradient(
    rgba(183, 151, 204, 1) 0%,
    rgba(118, 77, 144, 1) 100%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  align-items: center;
  @media only screen and (max-width: 1023px) {
    width: 75vw;
    max-height: 90vh;
    align-items: center;
  }
`
export const SContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
`
export const STop = styled(motion.div)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  align-self: flex-start;
  display: flex;
  height: 10vh;
`
export const SQuestionRow = styled.div`
  display: flex;
  flex-direction: row;
`
export const SQuestionButton = styled(motion.button)`
  padding: 8px;
  font-size: var(--body);
  color: white;
  margin: 8px;
  height: 100%;
`

export const SBody = styled(motion.div)`
  flex-direction: row;
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: space-evenly;
  overflow-y: auto;
`

export const SIcon = styled(motion.img)`
  margin: 12px 12px;
  display: flex;
  height: 100%;
  object-fit: contain;
  @media only screen and (max-width: 1023px) {
    height: 10vw;
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
  @media only screen and (max-width: 1023px) {
    font-size: 5vw;
  }
`
export const SDescription = styled(motion.div)`
  width: 100%;
  display: flex;
  p {
    font-size: var(--body);
    line-height: normal;
    white-space: pre-wrap;
  }
  flex-direction: column;
  overflow-y: auto;
`

export const SOverlay = styled(motion.div)`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const SCancel = styled.button`
  margin: 8px;
`
