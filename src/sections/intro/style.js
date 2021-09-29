import { motion } from "framer-motion"
import styled from "styled-components"

export const SBody = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
`

export const SHello = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  background-color: var(--buttons);
  border-radius: 20px;
  min-height: 15%;
  margin: 24px;
  padding: 12px;
  align-items: center;
  display: flex;
  font-size: Calc(1vw + 18px);
  text-align: center;
`

export const SPicture = styled.img`
  width: 35vw;
  justify-self: center;
  border-radius: 20px;
  display: flex;
  object-fit: contain;
  margin: 12px;
`

export const STitle = styled.text`
  font-size: Calc(24px + 2vw);
  text-align: center;
  align-self: center;
`

export const SContent = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 95%;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`
export const SText = styled.text`
  display: flex;
  text-align: center;
  font-size: Calc(18px + 1vh);
  margin-left: 8px;
  flex: 1;
  word-wrap: normal;
`
