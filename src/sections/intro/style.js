import styled from "styled-components"
import { motion } from "framer-motion"

export const SBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`

export const SHello = styled.div`
  display: flex;
  align-self: center;
  border: dotted 8px var(--primaryColor);
  padding: 16px;
  align-items: center;
  display: flex;
  font-size: var(--headline);
  font-weight: bold;
  text-align: center;
`

export const SPicture = styled.img`
  width: 80%;
  border: dotted 8px var(--primaryColor);
  justify-self: center;
  display: flex;
  object-fit: contain;
  padding: 16px;
  @media only screen and (max-width: 1023px) {
    margin-bottom: 50px;
  }
`

export const STitle = styled.h1`
  display: flex;
  font-size: var(--title1);
  text-align: center;
  font-weight: 600;
  justify-content: center;
  margin-block-start: 0em;
  margin-block-end: 0.2em;
`

export const SContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 16px;
  justify-content: space-evenly;
  width: 100%;
  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`
export const SText = styled.p`
  display: inline;
  text-align: center;
  flex-direction: column;
  font-size: var(--body);
  margin-block-start: 0em;
  margin-block-end: 0.5em;
  font-weight: 500;
  line-height: 1.4;
  a {
    color: var(--primaryColor);
  }
`
export const SAboutMe = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`
export const SOther = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 8px;
  justify-items: center;
  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`
export const SMuscicSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin: 0px 8px;
  h1 {
    font-size: var(--headline);
    text-align: center;
  }
  @media only screen and (max-width: 1023px) {
    width: 100%;
    margin-bottom: 50px;
  }
`
export const SMusic = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
`

export const SAlbum = styled(motion.a)`
  border-radius: 50%;
  height: 100%;
  cursor: pointer;
  aspect-ratio: 1/1;
  grid-column: 1/1;
  justify-self: center;
  grid-row: 1/8;
  background-image: url(${(props) => props.cover});
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`

export const SMedia = styled.div`
  border-radius: 4px;
  width: 75%;
  justify-self: center;
  height: 100%;
  grid-column: 1/1;
  grid-row: 5/11;
  background: var(--primaryGradient);
  overflow-x: hidden;
`
export const SMediaControls = styled.div`
  display: flex;
  flex-direction: row;
  grid-row: 8/11;
  grid-column: 1/1;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  button {
    height: 100%;
    width: auto;
    padding: 4px;
  }
  path {
    fill: var(--icons);
  }
`

export const SPraise = styled(motion.a)`
  display: flex;
  border-radius: 50%;
  background: var(--primaryGradient);
  padding: 16px;
  height: 100%;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  width: fit-content;
  path {
    fill: var(--icons);
  }
  @media only screen and (max-width: 1023px) {
    margin-bottom: 50px;
  }
`
