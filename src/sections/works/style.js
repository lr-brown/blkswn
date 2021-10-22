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
  font-size: 3.5vw;
  text-align: center;
  margin-top: 24px;
`

export const STitle = styled.text`
  font-size: 4vw;
  text-align: center;
  align-self: center;
`
export const SText = styled.text`
  display: flex;
  font-size: var(--title1);
  text-align: left;
  line-height: 200%;
  margin: 0px 32px;
`
