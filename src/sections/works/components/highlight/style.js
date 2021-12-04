import styled from "styled-components"
import { motion } from "framer-motion"

export const SBody = styled.div`
  display: flex;
  min-height: 45vh;
  width: 80%;
  padding: 16px;
  background-color: var(--secondaryColorTint);
  border: dashed 4px var(--primaryColor);
  border-radius: 8px;
  margin-bottom: 100px;
`
export const SContent = styled.div`
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr;
  display: grid;
  width: 100%;
  overflow-x: hidden;
`
export const SInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-area: ${(props) =>
    props.index % 2 === 0 ? " 1 / 1 / 1 / 5" : " 1 / 5 / 1 / 9"};
  align-items: ${(props) => (props.index % 2 === 0 ? "start" : "end")};
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1023px) {
    grid-column: 1/9;
    align-items: center;
  }
`
export const STitle = styled(motion.h1)`
  display: flex;
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: var(--title2);
  margin-bottom: 8px;
`

export const SImage = styled(motion.div)`
  display: flex;
  flex-direction: row;
  grid-area: ${(props) =>
    props.index % 2 === 0 ? " 1 / 5 / 1 / 9" : " 1 / 1 / 1 / 5"};
  justify-content: ${(props) => (props.index % 2 === 0 ? "end" : "start")};
  width: 100%;
  height: 100%;
  align-items: center;
  img {
    padding: 0px 4px;
    object-fit: contain;
    max-height: 40vh;
    max-width: 90%;
    width: auto;
    height: auto;
    border-radius: 6px;
  }
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`
export const SDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: fit-content;
  align-items: ${(props) => (props.index % 2 === 0 ? "start" : "end")};
  text-align: ${(props) => (props.index % 2 === 0 ? "start" : "end")};
  border-radius: 4px;
  margin-bottom: 8px;
  background: (--primaryGradient);
  @media only screen and (max-width: 1023px) {
    align-items: center;
  }
`

export const SButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  path {
    fill: var(--icons);
  }
`
export const SIconLink = styled(motion.a)`
  padding: 8px;
  font-size: var(--body);
`
export const SIcon = styled(motion.div)`
  padding-right: 8px;
  padding-top: 16px;
`
