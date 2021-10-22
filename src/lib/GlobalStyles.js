import { createGlobalStyle, css } from "styled-components"
import LeagueSpartan from "./font/LeagueSpartan-Bold.otf"
import { StyledIconBase } from "@styled-icons/styled-icon"

const Dark = css`
  :root {
    --accent: #464962;
    --sidetab: #2d394e;
    --backgroundColor: #171d26;
    --primaryTextColor: #ffffff;
    --icons: #ffffff;
    --buttons: #b797cc;
    --buttonsAlt: #3e0a48;
  }
`

const Light = css`
  :root {
    --accent: #3e0b47;
    --sidetab: #e0e0e0;
    --backgroundColor: #ffffff;
    --primaryTextColor: #000000;
    --icons: #000000;
    --buttons: #ffcdc3;
    --buttonsAlt: #f7ddd3;
  }
`

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: League Spartan;
    src: url(${LeagueSpartan});
  }

${Light}
@media (prefers-color-scheme: dark) {
   ${Dark}
}

body {
    padding: 0px;
    margin: 0px;
    font-family:League Spartan;
    background: var(--backgroundColor);
    line-height: normal;
    color:var(--primaryTextColor);
  }
button{
  background: none;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  font-family:League Spartan;
}

#root {
    // Font sizes
    --title1: 32px;
    --title2: 24px;
    --headline: 20px;
    --body1: 16px;
    --body2: 14px;
    margin: 0px 0px;
    font-size: var(--body1);
    display: flex;
    align-items: center;
    flex-direction: column;
}

${StyledIconBase} {
    color: var(--icons);
  }

`
export default GlobalStyle
