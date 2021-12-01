import styled from "styled-components"

export const SBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const SHeader = styled.h1`
  display: flex;
  font-size: var(--title1);
  text-align: center;
  font-weight: 600;
  margin-top: 8px;
`

export const SHighlights = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const SCards = styled.div`
  display: grid;
  grid-gap: 24px;
  width: 90%;
  grid-template-columns: repeat(3, 1fr);
  @media only screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`
