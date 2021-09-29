import styled from "styled-components"
import { motion } from "framer-motion"

export const SCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  aspect-ratio: 1/1.25;
  margin: 16px 8px;
  height: 40vh;
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
  font-size: 2vw;
  text-align: center;
`

export const SButton = styled(motion.div)`
  background-color: var(--accent);
  user-select: none;
  display: flex;
  cursor: pointer;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  padding: 12px 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`
