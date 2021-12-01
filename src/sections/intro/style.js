import styled from "styled-components"

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
`

export const STitle = styled.div`
  display: flex;
  font-size: var(--title1);
  text-align: center;
  font-weight: 600;
  justify-content: center;
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
  display: flex;
  text-align: center;
  flex-direction: column;
  font-size: var(--body);
  margin-block-start: 0em;
  margin-block-end: 0em;
`
export const SAboutMe = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`
