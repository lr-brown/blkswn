import styled from "styled-components"
import { motion } from "framer-motion"

export const SCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  justify-self: center;
  max-width: 500px;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(
    315deg,
    rgba(183, 151, 204, 1) 0%,
    rgba(118, 77, 144, 1) 100%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  img {
    border-radius: 12px;
    object-fit: contain;
    max-width: 80%;
    height: 30%;
  }
`

export const SHeader = styled(motion.div)`
  display: flex;
  font-size: var(--title2);
  text-align: center;
  font-weight: bold;
`
export const SButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
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
