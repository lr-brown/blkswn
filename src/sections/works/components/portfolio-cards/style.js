import styled from "styled-components"
import { motion } from "framer-motion"

export const SCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  aspect-ratio: 1/1.25;
  margin: 12px 8px;
  height: 350px;
  padding: 16px;
  border-radius: 16px;
  background-color: var(--buttons);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`

export const SIcon = styled(motion.img)`
  border-radius: 12px;
  height: 40%;
  display: flex;
  object-fit: contain;
`

export const SHeader = styled(motion.div)`
  display: flex;
  font-size: var(--title2);
  text-align: center;
  font-weight: bold;
`

export const SButton = styled(motion.button)`
  background-color: var(--buttonsAlt);
  color: var(--primaryTextColor);
  cursor: pointer;
  padding: 12px 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
`
export const SLogos = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  path {
    fill: var(--primaryTextColor);
  }
`
