import { motion } from "framer-motion"
import styled from "styled-components"

export const SBody = styled(motion.div)`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
`

export const SHeader = styled.text`
  display: flex;
  font-size: var(--title1);
  text-align: center;
  margin-top: 24px;
  font-weight: 600;
`
export const SCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 95%;
  align-self: center;
  flex-wrap: wrap;
  flex: 1 1 auto;
`
