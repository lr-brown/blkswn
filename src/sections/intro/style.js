import { motion } from "framer-motion"
import styled from "styled-components"

export const SBody = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const SHello = styled.div`
  display: flex;
  align-self: center;
  background-color: var(--buttons);
  border-radius: 20px;
  margin: 16px;
  padding: 24px;
  align-items: center;
  display: flex;
  font-size: Calc(1vw + 18px);
  font-weight: bold;
  text-align: center;
`
export const SPictureDiv = styled.div`
  flex: 1;
  padding: 16px;
`

export const SPicture = styled.img`
  width: 100%;
  flex: 1;
  justify-self: center;
  border-radius: 20px;
  display: flex;
  object-fit: contain;
`

export const STitle = styled.text`
  display: flex;
  font-size: Calc(24px + 2vw);
  text-align: center;
  align-self: center;
  font-weight: 600;
`

export const SContent = styled.div`
  display: flex;
  flex: 5;
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
  flex-direction: column;
  font-size: Calc(var(--body1) + 1vh);
  word-wrap: normal;
  font-weight: 500;
`
export const SAboutMe = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-evenly;
  flex-direction: column;
  flex: 1;
  word-wrap: normal;
  align-self: stretch;
`
