import { motion } from "framer-motion"
import styled from "styled-components"

export const SBody = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
`

export const SHello = styled.div`
  display: flex;
  align-self: center;
  background-color: var(--buttons);
  border-radius: 20px;
  padding: 16px;
  align-items: center;
  display: flex;
  font-size: var(--headline);
  font-weight: bold;
  text-align: center;
`

export const SPicture = styled.img`
  width: 100%;
  justify-self: center;
  border-radius: 20px;
  display: flex;
  object-fit: cover;
  padding: 8px;
`

export const STitle = styled.h2`
  font-size: var(--title2);
  text-align: center;
  align-self: center;
  font-weight: 600;
  margin: 8px;
`

export const SContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 16px;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`
export const SText = styled.p`
  display: flex;
  text-align: center;
  flex-direction: column;
  font-size: var(--body);
`
export const SAboutMe = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`
